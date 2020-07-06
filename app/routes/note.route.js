module.exports = (app) => {
    const notes = require('../controller/note.controller');

    //create notes
    app.post('/notes', notes.create);

    //get notes
    app.get('/notes', notes.findAll);

    //get particularNote
    app.get('/notes/:noteId', notes.findOne)
    
    //update note
    app.put('/notes/:noteId', notes.update);

    //delete note
    app.delete('/notes/:noteId', notes.delete);
}