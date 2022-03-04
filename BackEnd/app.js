const express = require('express')
const data = require('./data.json')
var cors = require('cors');
var app = express();app.use(cors());


app.get('/', (req, res) => {
  res.send('running')
})

app.get('/data', (req, res) => {
    res.send(data)
})

app.listen(4000)
console.log('Running on 4000')
