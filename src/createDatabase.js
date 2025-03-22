const mongoose = require('mongoose')
const Subscriber = require('./models/subscribers')
const data = require('./data')
require("dotenv").config();

// Connect to DATABASE
const dburl = process.env. DATABASE_URI;

mongoose.connect(dburl)("mongodb+srv://user210:riaria7548@subscribers.mpuwu.mongodb.net/user210?retryWrites=true&w=majority")
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Refresh data in subscribers collection

async function refreshData() {

try {

await Subscriber.deleteMany({}, { wtimeout: 30000 });

console.log("Deleted all subscribers");

const newSubscribers = await Subscriber.insertMany (data);

console.log(`Added ${newSubscribers.length} new subscribers`);

} catch (err) {

console.log("Error refreshing data", err);

} finally {
mongoose.disconnect();
console.log("Disconneted from database");
}
}
refreshData()
