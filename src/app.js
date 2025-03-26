const express = require('express');
const subscribers = require("./models/subscribers");
const path = require("path")

const app = express();


// Route to get channel names only
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});
//get all subscribers 
app.get("/subscribers", async (req, res, next) => {
    try {
        let foundSubscribers = await subscribers.find();
        res.status(200).json(foundSubscribers);
    } catch (error) {
        res.status(500);
        next(error);
    }
});
//get all subscibers name and subscribed channel 
app.get("/subscribers/names", async (req, res, next) => {
    try {
        let foundSubscribers = await subscribers.find(
            {},
            { name: 1, subscribedChannel: 1, _id: 0 }
        );
        res.status(200).json(foundSubscribers);
    } catch (error) {
        res.status(500);
        next(error);
    }
});

//get the subscriber by id 
app.get("/subscribers/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let foundSubscribers = await subscribers.findById(id);
        res.status(200).json(foundSubscribers);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});
module.exports = app;