const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.post('/', (req, res) => {
    console.log('user signup');

    const { username, password, email } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, there's already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password,
                email: email
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

module.exports = router