const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const path = require('path')

const config = require('./config/db')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

app.use(express.static(path.join(__dirname, 'client', 'dist', 'client')));

// app.use(express.static(path.join(__dirname, 'public')));

try {
    mongoose.connect(config.db, {
        useNewUrlParser: true,
    }, () => {
        console.log('Connected to DB')
    });
} catch (error) {
    console.log(error)
}

//route
const indexRoute = require('./router/index')
const accountRoute = require('./router/account')

app.use('/', indexRoute)
app.use('/account', accountRoute)

const PORT = 4747;

app.listen(PORT, () => {
    console.log(`Connected to http://localhost:${PORT}`)
})