<template>
    <div class="note-form">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="note.title" />
      </div>
  
      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" v-model="note.description"></textarea>
      </div>
  
      <div class="form-group">
        <label for="tags">Tags (comma separated)</label>
        <input type="text" id="tags" v-model="tagsInput" />
      </div>
  
      <div class="form-group">
        <label for="color">Color</label>
        <input type="color" id="color" v-model="note.color" />
      </div>
  
      <button @click="save">Save</button>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    note: {
      type: Object,
      required: true
    }
  });
  
  const emits = defineEmits(['save']);
  
  const note = ref(props.note);
  const tagsInput = ref(note.value.tags.join(', '));
  
  watch(() => props.note, (newVal) => {
    note.value = newVal;
    tagsInput.value = newVal.tags.join(', ');
  });
  
  const save = () => {
    note.value.tags = tagsInput.value.split(',').map(tag => tag.trim());
    emits('save', note.value);
  };
  </script>
  
  <style>
  /* Your existing styles */
  </style>
  