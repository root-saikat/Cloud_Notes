const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/notebook?"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI);
    console.log("connected to mongo3");
}

module.exports = connectToMongo;