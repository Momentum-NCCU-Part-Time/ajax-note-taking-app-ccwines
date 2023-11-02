const app = {
  data: {
    url: "http://localhost:3000/notes",
    notes: []
  },

  /* methods */
  getNotes: function() {
    fetch(this.data.url, {
      method: 'GET',
      headers: {"Content-Type": "application/json"}
    })
    .then(r => r.json())
    .then(response => {
      for (let note of response) {
        this.data.notes.push(note)
      };
      this.generateNotesHTML()
    }
    )
  },

  createNote: function() {
    /* POST request to save note */
  },

  displayCreateForm: function() {
    /* displays form */
  },

  deleteNote: function(noteId) {
    /* delete request */
  },

  confirmDelete: function() {
    /* display confirmation popup, call deleteNote(noteId) */
  },

  editNote: function(id) {
    /* call displayEditForm(), saves/overwrites note (request) */
  },

  displayEditForm: function(note) {
    let form = document.getElementById('editForm');
    form.classList.remove('hidden')
  },

  generateNotesHTML: function() {
    const container = document.getElementById('container');
    for (let note of this.data.notes) {
      container.innerHTML += `
        <div>
          <div>${note.title}</div>
          <div>${note.body}</div>
          <button data-id=${note.id}>EDIT</button>
        </div>
      `}
  },

  main: function() {
    /* call getNotes(), set up event listeners (will contain if statements, or other code to call when a user clicks edit, delete, or create) - use event.preventDefault(); */
    /* EVENT LISTENER:
        editNote(event.target.data-id)
    */
  }
}
