
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const path = require('path');
const session = require('express-session')
const dbConnection = require('./database') 
const routes = require('./routes/api/')
var morgan = require('morgan')
var MongoStore = require('connect-mongo')(session)

const passport = require('./passport');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

const PORT = process.env.PORT || 3001;

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('../build'));
}

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
    secret: 'pebbles', //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

app.get('/hey'), (req, res) => res.send('yo!!!')

// Routes
app.use(routes)

// app.get('*',(req, res) => {
//   res.sendFile('index.html', { root: path.join(__dirname, '../build') 
//   });
// });

app.listen(PORT, () =>
  console.log('Express server is running on localhost:3000'),
  console.log(__dirname)
);
