const express = require('express')
const path = require('path')
const studentDb = require('./data/student-db')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', function(req, res) {
    res.send('</h1>Learning Express</h1>')
})

app.get('/home', function(req, res) {
    res.send('home')
})

app.listen(3000, function () {
    console.log('listening on port 3000')
})