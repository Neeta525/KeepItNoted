//import helper
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

//set uuid
const { v4: uuidv4 } = require('uuid');

const fs = require('fs');
const path = require('path');
const database = require('..db/db');

//sets up router for notes path
const notes = require('express').Router();

//Get route for retrieving notes
notes.get('/', (req, res) => {
    readFromFile('.db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote ={
            title,
            text,
            id: uuidv4(),
        };
        readAndAppend(newNote, './db/db.json');
        res,json('Note added succesfully 📝');
    } else {
        res.status(404).send('Error adding note');
    }
});
//export 
module.exports = notes;