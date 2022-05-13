//Start Express
const express = require('express');
const path = require('path');
// const { clog } = require('./middleware/clog.js');
//import API router
const api = require('./routes');


//define port
const PORT =  process.env.PORT || 3001;

const app = express();


// app.use = clog();

//middleware parsing JSON and urlecoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api', api);


app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

//port/server listener 
app.listen(PORT, () => 
  console.log(`App listening at http:localhost:${PORT}`)
  );