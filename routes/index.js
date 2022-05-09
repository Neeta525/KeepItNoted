//import express
const express = require('express');

//import notes from notes.js file
const notes = require('./notes');

//initialize
const app = express();

//notes router for /notes
app.use('/notes', notesRouter);

//export the express app
module.exports = app;