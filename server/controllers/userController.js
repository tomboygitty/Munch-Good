const db = require('../database/models');
const passport = require('passport');

module.exports.controller = function(app) {
    app.post('/signup', function(req, res) {
        console.log('user signup');
        const { username, password, email } = req.body;
        console.log(username, password, email)
        // ADD VALIDATION
        db.User.findOne({ username: username }, (err, user) => {
            if (err) {
                console.log('User.js post error: ', err)
            } else if (user) {
                res.json({
                    error: `Sorry, already a user with the username: ${username}`
                })
            }
            else {
                const newUser = new User({
                    username: username,
                    password: password,
                    email: email
                })
                newUser.save((err, savedUser) => {
                    if (err) return res.json(err);
                    res.redirect('/welcome');
                    console.log('signup success')
                })
            }
        })
    });
    
    app.post('/login', function(req, res) {
        (req, res, next) => {
            console.log('routes/user.js, login, req.body: ');
            
            console.log(req.body)
            next()
        };
        passport.authenticate('local');
        (req, res) => {
            console.log('logged in', req.user);
            var userInfo = {
                username: req.user.username
            };
            res.send(userInfo);
        }
    });
    
    app.get('/signup', function(req, res, next) {
        console.log('===== user!!======')
        console.log(req.user)
        if (req.user) {
            res.json({ user: req.user })
        } else {
            res.json({ user: null })
        }
    });
    
    app.post('/logout', function(req, res) {
        if (req.user) {
            res.send({ msg: 'logging out' })
        } else {
            res.send({ msg: 'no user to log out' })
        }
    });
};