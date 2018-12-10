// const http = require('http')
const path = require('path')


const express = require('express')
const bodyParser = require('body-parser')
// const handlebars = require('express-handlebars')


const app = express()

// app.engine('handlebars', handlebars())
app.set('view engine', 'ejs')
app.set('views', 'views')

//Requiring Route Files here
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const get404Controller = require('./controllers/404')

//Parser must come before middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

//Middleware
app.use('/admin', adminRoutes)
app.use(shopRoutes)


app.use(get404Controller.get404)


app.listen(3000)


// const server = http.createServer(app) 

// //Server is listening to localhost:3000
// server.listen(3000)