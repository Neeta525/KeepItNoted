const notes = require('express').Router();



//Get route for retrieving notes
notes.get('/', (req, res) => {
    readFromFile('.db/notes.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, note } = req.body;

    if (req.body) {
        const newNote ={
            title,
            note,
            note_id: uuid(),
        };
        readAndAppend(newNote, './db/notes.json');
        res,json('Note added succesfully 📝');
    } else {
        res.error('Error adding note');
    }
});

module.exports = notes;