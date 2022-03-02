const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/laurine', (req, res) => {
    res.send('Hello Laurine!')
})

app.get('/training', (req, res) => {
    res.send('Welcome to the training section')
})

// express.static("../FrontEnd/vueproject/", [])
app.use(express.static('../FrontEnd/vueproject/neoxam/dist/'))
app.use('/training',express.static('./public'))

//app.use('/training', express.static('../FrontEnd/vueproject/neoxam/dist/'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})