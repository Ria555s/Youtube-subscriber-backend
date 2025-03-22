const express = require('express');
const app = require('./app.js');
const mongoose = require('mongoose');
const port = 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const DATABASE_URL = "mongodb+srv://user210:riaria7548@subscribers.mpuwu.mongodb.net/user210?retryWrites=true&w=majority";

mongoose.connect(DATABASE_URL)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('MongoDB Connection Error:', err));

const db = mongoose.connection;

db.on('error', (err) => console.log('MongoDB Error:', err));
db.once('open', () => console.log('Connected to MongoDB'));


// Start Server
app.listen(port, ( ) => console.log(`App listening on port ${port}!`));

