import axios from 'axios';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiMHovVG80NXVRS084TWh4OFlZbzcyUT09c2V5d1oyZFRhTDhOL1UrcExXelZIQT09M2hveTczUDhUWllLNDk0empNK2F3UXZHQ0E0WSttOG5SYVNJMk9nTFBqZEMyVk9sUTlMQzlLaUJtV2NEOVYxYUJ4bEF2S0NHbkh3V1VCUWR5dkNSd2U1Qjc2MUtkZW5HakdiOU1ZMHROdC9vNWFvNml1c1BRTDFERFRBSnVBelY4WFp0NVRhSm1VNXNyVytIbllDMGRwOU5ra004Z1AyYmdySFJGTnFUV250eDNEblFwbHAySXJvS2Q2VURld25ScHdxMitSRVA5UHpQN2xzY3FlaG5iVFl6UzR6NHJMMGhNaGVIeS9uZVhzRll2NHV0ZEFxTDR5SU9MZVhVOTNTSjV1MzB2RXJNNWxRRXZzNm44TEdkbjY5Q0g1S01nMjB5Mnl3c3JwQk05SWZORnRDLzFacG1xK051RjBWMjlaOGdQeVZ5dTJ1VXEreHBJa1RhWldnN0FwQjJ3QjQ4Z3J2cW9vUGZxWDB2Z3YrTEc0c0hXVXJzTGRlUTEydkg1blRvellaZnZsQ01NVXdZN3M1S05tWDJsZFJrWDBnTllxUW5Ta2I2TjkvN0V3dz0iLCJ1c2VySWRlbnRpdHkiOnsiaWQiOjEsInVzZXJuYW1lIjoiZGV2ZWxvcG1lbnQtdG9rZW4iLCJ1c2VyVHlwZSI6MX0sImlhdCI6MTcwMjM4ODI1OCwiZXhwIjoxMTE2OTY2ODI1OH0.sBQJUKMWa-RGXNqLuiM6DFgXCKGxuYZgmAjkhZ0PJRw"; 

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});

function getNotes() {
    return axiosInstance.get('Notes/search');
}
            
function createNote(noteData) {
    return axiosInstance.post('Notes/create', noteData);
}

function editNote(editedNote) {
    return axiosInstance.post('Notes/updateTraderNote', editedNote);
  }
  
function deleteNotes(id) {
    return axiosInstance.post('Notes/removeTraderNote', {id});
  }

export const api = {
    getNotes,
    createNote,
    editNote,
    deleteNotes
};


