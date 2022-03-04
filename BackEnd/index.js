const express = require('express')
const app = express()
const port = 3000

const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
  }
  
app.use(requestTime)
  
app.get('/', (req, res) => {
    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${req.requestTime}</small>`
    res.send(responseText)
})
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/example/b', (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next()
  }, (req, res) => {
    res.send('Hello from B!')
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

// app.use('/training', express.static('../FrontEnd/vueproject/neoxam/dist/'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})