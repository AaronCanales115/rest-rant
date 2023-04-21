//modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

//Express settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//controllers and routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
  })  

app.get('*', (req, res) => {
    res.render('error404')
})

//listen for connections
app.listen(process.env.PORT)


