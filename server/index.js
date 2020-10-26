
const express = require('express')
const app = express()
const port = 3001
const winston = require('./utils/loger')

app.get('/', (req, res) => {
  res.send('Hello Word!')

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)

})





