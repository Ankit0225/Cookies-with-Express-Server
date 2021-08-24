const express = require('express')

const app = express()

let Count = 0;
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/views'))

app.get('/', (req,res) => {
    Count++;
    // res.render('index',{users: Users.findAll()})
    res.render('index', {Count})
} )

app.listen('5000',()=> {
    console.log("Server Started on http://localhost:5000");
})