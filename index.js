import express from 'express'
import exphbs from 'express-handlebars'
import path from 'path'


const app = express()

app.engine('handlebars', exphbs.engine())
app.set("view engine", "handlebars")

app.use(express.static('public'))

// Inicio 
app.get('/', function (req, res) {
  let end = path.resolve('./view/index.html')
  res.sendFile(end)
})

// Argentina
app.get('/argentina', function (req, res) {
  let end = path.resolve('./view/argentina.html')
  res.sendFile(end)
})

// Brasil
app.get('/brasil', function (req, res) {
  let end = path.resolve('./view/brasil.html')
  res.sendFile(end)
})

// Canadá
app.get('/canada', function (req, res) {
  let end = path.resolve('./view/canada.html')
  res.sendFile(end)
  
})

// EUA
app.get('/eua', function (req, res) {
  let end = path.resolve('./view/eua.html')
  res.sendFile(end)
})

// Mexico
app.get('/mexico', function (req, res) {
  let end = path.resolve('./view/mexico.html')
  res.sendFile(end)
})

app.listen(4000, ()=>{console.log("Funcionando na porta 4000")})