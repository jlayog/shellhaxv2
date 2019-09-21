const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');

const app = express();

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect MongoDB
mongoose    
    .connect(db, { usrNewUrlParser: true}) // removing deprication warning
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Passport
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);