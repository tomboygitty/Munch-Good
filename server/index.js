const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const session = require('express-session')
const dbConnection = require('./database') 
const passport = require('./passport');
// Route requires
const user = require('./routes/user')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Routes
app.use('/user', user)

// Sessions
app.use(
	session({
		secret: 'pebbles', //pick a random string to make the hash that is generated secure
		resave: false, //required
		saveUninitialized: false //required
	})
)

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);