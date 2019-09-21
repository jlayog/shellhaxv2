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
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true}) // removing deprication warning
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Passport
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);

if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server connected on port ${port}`));