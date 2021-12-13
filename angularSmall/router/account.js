const { Router } = require('express')
const router = Router()
const bcryptjs = require('bcryptjs')
const Users = require('../models/user')

router.post('/newUser', async (req, res) => {
    try {
        const { name, email, login, password } = req.body;
        const condidat = await Users.findOne({ email })

        if (condidat) {
            res.json({ success: false, msg: "user exist" })
            res.redirect('/account')
        } else {
            const hashpassword = await bcryptjs.hash(password, 10)

            const newUser = new Users({
                name, email, login, password: hashpassword
            })

            await newUser.save();
            await console.log(newUser)
            res.json({ success: true, msg: "success" })
        }
    } catch (error) {
        res.json({ success: false, msg: "user hui" })
        console.log(error)
    }
})

router.get('/auth', async (req, res) => {
    try {
        const { email, password } = req.body
        const candidate = await Users.findOne({ email })

        if (candidate) {
            const areSame = await bcryptjs.compare(password, candidate.password)

            if (areSame) {
                res.redirect('/')
                res.json({ success: true, msg: "Enter" })
                console.log("Enter")
            } else {
                res.redirect('/account')
                res.json({ success: false, msg: "Password not the same" })
                console.log("Password not the same")
            }
        } else {
            res.redirect('/account')
            res.json({ success: false, msg: "No user" })
            console.log("No user")
        }
    } catch (error) {
        console.log(error)
    }
})

router.get('/dashboard', (req, res) => {
    res.send(
        '<div>Dash board</div>'
    )
})

module.exports = router;