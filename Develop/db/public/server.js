const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /notes'));
app.get('/send',(req,res) =>
res.sendFile(path.join(__dirname, 'Develop/db/public/index.html'))
);

app.get('/notes',(req,res) =>
res.sendFile(path.join(__dirname, 'Develop/db/public/notes.html'))
);

app.listen(8080);

