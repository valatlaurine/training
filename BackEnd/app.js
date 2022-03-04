const express = require('express')
const data = require('./data.json')
var cors = require('cors');
var app = express();app.use(cors());


app.get('/', (req, res) => {
  res.send('running')
})

app.get('/data', (req, res) => {
  console.log(req.url)
  console.log(req.query)
  const response = data.filter(d => d.fund_id === req.query.fund_id)
  res.send(response)
})

app.listen(4000)
console.log('Running on 4000')
