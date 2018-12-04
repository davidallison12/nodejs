// const http = require('http')
const path = require('path')


const express = require('express')
const bodyParser = require('body-parser')


const app = express()

//Requiring Route Files here
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

//Parser must come before middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

//Middleware
app.use('/admin', adminData.routes)
app.use(shopRoutes)


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})


app.listen(3000)


// const server = http.createServer(app) 

// //Server is listening to localhost:3000
// server.listen(3000)