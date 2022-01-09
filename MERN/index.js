const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const passport = require('passport')

const keys = require('./config/index')
const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const app = express()

app.use(passport.initialize())
require('./middleware/passport')(passport)
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
// app.use(cors)


app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)


const PORT = process.env.PORT || 5000;

start();

async function start() {
    try {
        await mongoose.connect(keys.MONGODB_URI, {
            // useNewUrlParser: true,
            // useFindAndModify: false
        }, () => {
            console.log(`DATA CONNECTED`)
        })
    } catch (error) {
        console.log(`---------DATABASE ERROR----------`)
        console.log(error)
        console.log(`---------DATABASE ERROR----------`)
    }
}

try {
    app.listen(PORT, () => {
        console.log(`Working on http://localhost:${PORT}`)
    })
} catch (error) {
    console.log(`---------APP ERROR----------`)
    console.log(error)
    console.log(`---------APP ERROR----------`)
}