const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

const PORT = process.env.PORT || 3000;

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('../build'));
}

app.get('*',(req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../build') 
  });
});

app.listen(PORT, () =>
  console.log('Express server is running on localhost:3000'),
  console.log(__dirname)
);

/// ---------------- SQL DB SERVER CODE -------------------- ///
