const express = require('express')
const expressSession = require('express-session')

const app = express()

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/views'))

// app.use(expressSession({
// resave and saveUninitailized are compulsary to write in expressSession
//   resave: false,          //saves the cookie on each client <---> communication
//   saveUninitialized: false, // save cookie even if nothing to track
//   secret:'Some long Random String Here', // used to encrypt the cookie
// }))


app.use(expressSession({
    // resave and saveUninitailized are compulsary to write in expressSession
  resave: true,          //saves the cookie on each client <---> communication
  saveUninitialized: true, // save cookie even if nothing to track
  secret:'Some long Random String Here', // used to encrypt the cookie
//   name: "Cookies are Awesome" , // gives an name of the cookie
}))
app.get('/', (req,res) => {
   console.log(req.session);
   if (!req.session.visits) req.session.visits = 1
   else  req.session.visits++
    // res.render('index',{users: Users.findAll()})
    res.render('index', {Count : + (req.session.visits) })
} )

app.listen('5000',()=> {
    console.log("Server Started on http://localhost:5000");
})