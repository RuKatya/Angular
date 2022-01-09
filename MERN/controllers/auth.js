const bcryptjs = require('bcryptjs') //for passwords
const jwt = require('jsonwebtoken')
const keys = require('../config/index')
const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async function (req, res) {
    const { email, password } = req.body

    const condidate = await User.findOne({ email })

    if (condidate) { //if user exist - check the password
        const passwordResult = bcryptjs.compareSync(password, condidate.password)

        if (passwordResult) { //password true
            const token = jwt.sign({
                email: condidate.email,
                userId: condidate._id
            }, keys.jwt, { expiresIn: 60 * 60 * 1000 })

            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            res.status(401).json({
                message: "Wrong password"
            })
        }

    } else {
        res.status(404).json({
            message: "User not exist"
        })
    }
}

module.exports.register = async function (req, res) {
    //email & passord
    const { email, password } = req.body

    const condidate = await User.findOne({ email })

    if (condidate) { //if we have -- acoount exist
        console.log(`${email} exist`)
        res.status(409).json({
            message: "User exist"
        }) //409 conflict
    } else { //if not have - register
        const salt = bcryptjs.genSaltSync(10);
        const newUser = await new User({
            email, password: bcryptjs.hashSync(password, salt)
        })

        try {
            await newUser.save()
            console.log(`user created ${newUser}`)
            res.status(201).json({
                newUser,
                message: "User register"
            })
        } catch (error) {
            errorHandler(res, e)
        }
    }
}