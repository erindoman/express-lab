const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', function(req, res) {
    res.send('</h1>Hello Express</h1>')
})

app.get('/home', function(req, res) {
    res.send('home')
})

app.listen(3000, function () {
    console.log('listening on port 3000')
})