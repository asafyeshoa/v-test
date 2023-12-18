<template>
  <div class="notes-container">
    <div class="top-section">
      <h1>My Notes</h1>
      <div>
        <button @click="addNote" class="create-note-button" >Create Note</button>
        <button @click="deleteAllNotes" class="delete-all-notes-button" >Delete All Notes</button>
      </div>
    </div>
    <note-form v-if="showForm" :note="editableNote" @save="saveNote"/>
    <div class="note-container">
      <div v-for="(note, index) in notes" :key="index" :style="{ backgroundColor: note.color }" class="note">
        <h2>{{ note.title }}</h2>
        <p>{{ note.description }}</p>
        <div class="tags">{{ note.tags.join(', ') }}</div>
        <div>
          <button @click="editNote(index)" :data-testid="'edit-note-' + index" >Edit</button>
          <button @click="deleteNote(index)" :data-testid="'delete-note-' + index"  >Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<!--  some adjustments needed  -->

<script setup>
import { ref, onMounted } from 'vue';
import NoteForm from './NoteForm.vue';
import {api} from "../utils/axios.js"
const notes = ref([]);

const showForm = ref(false);
const editableNote = ref({});
const editIndex = ref(-1);

const addNote = () => {
  editableNote.value = { title: '', description: '', tags: [], color: '#ffffff', traderId: 1 };
  editIndex.value = -1;
  showForm.value = true;
};

const deleteAllNotes = async () => {
  const ids = notes.value.map((_, index) => index);
  await api.deleteNotes(ids);
  notes.value = [];
};

const editNote = (index) => {
  editableNote.value = {...notes.value[index]};
  editIndex.value = index;
  showForm.value = true;
};

const deleteNote = async (index) => {
  await api.deleteNotes([index]);
  notes.value.splice(index, 1);
};

const saveNote = async (updatedNote) => {
  if (editIndex.value >= 0) {
    updatedNote.id = editIndex.value;
    await api.editNote(updatedNote);
    notes.value[editIndex.value] = updatedNote;
  } else {
    await api.createNote(updatedNote);
    notes.value.push(updatedNote);
  }
  showForm.value = false;
};

const transformNotesArray = (notes) => {
  return notes.map(note => ({
    title: note['notes.title'],
    description: note['notes.description'],
    tags: note['notes.tags'],
    color: note['notes.color']
  }));
}

onMounted(async () => {
  const fetchedNotes = await api.getNotes();
  const transformedNotes = transformNotesArray(fetchedNotes.data.data);
  console.log(transformedNotes);
  notes.value = transformedNotes;
});

</script>



<style>
.notes-container {
  width: 1000px;
  height: 90%;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f5f5f5;
}

.top-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px black solid;
}

.top-section h1 {
  margin: 0;
}

.note-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
}

.note {
  flex-basis: calc(33.333% - 20px);
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.tags {
  margin: 10px 0;
  font-style: italic;
  color: #666;
}

button {
  cursor: pointer;
  padding: 8px 15px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
}

button:hover {
  background-color: #0056b3;
}

.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  /* Other styling */
}
</style>
