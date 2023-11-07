const app = {
  data: {
    url: "http://localhost:3000/notes/",
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
    fetch(this.data.url + noteId, {
      method: 'DELETE',
      headers: {"Content-Type": "application/json"}
    })
    .then(r => r.json())
    .then(response => {
      /* Delete object from this.data.notes */
      this.generateNotesHTML();
    })
    
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
        <div class="noteCard">
          <div>${note.title}</div>
          <div>${note.body}</div>
          <button data-id=${note.id}>EDIT</button>
          <button class="deleteButton" data-id=${note.id}>DELETE</button>
        </div>
      `}
    this.addEventListeners();
  },

  addEventListeners: function() {
    let deleteButtons = document.querySelectorAll(".deleteButton");
    for (let button of deleteButtons) {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        this.deleteNote(button.dataset.id);
      })
    }
  },

  main: function() {
    /* call getNotes(), set up event listeners (will contain if statements, or other code to call when a user clicks edit, delete, or create) - use event.preventDefault(); */
    /* EVENT LISTENER:
        editNote(event.target.data-id)
    */

    this.getNotes();
    
  }
}

app.main()
