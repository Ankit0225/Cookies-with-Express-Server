const express = require('express')
const expressSession = require('express-session')

const app = express()

let Count = 0;
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/views'))

app.use(expressSession({
    // resave and saveUninitailized are compulsary to write in expressSession
  resave: false,          //saves the cookie on each client <---> communication
  saveUninitialized: false, // save cookie even if nothing to track
  secret:'Some long Random String Here', // used to encrypt the cookie
}))
app.get('/', (req,res) => {
    Count++;
    // res.render('index',{users: Users.findAll()})
    res.render('index', {Count})
} )

app.listen('5000',()=> {
    console.log("Server Started on http://localhost:5000");
})