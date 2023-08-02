//database se connenct hone waala code hum yaha par likhege

const mongoose = require('mongoose');
require('dotenv').config()
const mongoURI = process.env.MONGO_URL
const connectToMongo = () => {
    mongoose.connect(mongoURI);
    console.log("Conncted to Mongo sucessfully!");
}

module.exports = connectToMongo;
