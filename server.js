//Start Express
const express = require('express');
const path = require('path');

//import API router
const api = require('./routes/index.js');
const { clog } = require('./middleware/clog.js');

//define port
const PORT =  process.env.port || 3001;

const app = express();


app.use = express();

//middleware parsing JSON and urlecoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

//get call to notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


app.use('/api', api);
app.get('*', (req, res) => {
  res.sendFile(path.join(__direname, '/public/index.html'));
});

//port/server listener 
app.listen(PORT, () => 
  console.log(`App listening at http:localhost:${PORT}`)
  );