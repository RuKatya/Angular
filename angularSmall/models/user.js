const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')
const config = require('../config/db')

const UserSchema = new Schema({
    name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = model('User', UserSchema)