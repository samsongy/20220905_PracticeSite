const express = require('express')
const app = express()
const port = 8080
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render(__dirname + "/views/index")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})