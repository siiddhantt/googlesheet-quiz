const credentials = require('./credentials.json');
const mongoose = require('mongoose');
const mongoURI = credentials.mongoURI;
const connectToMongo = ()=>{
    mongoose.connect(process.env.MONGODB_URI || mongoURI, {dbName:'react-quiz'}, ()=>{
        console.log("Connected Successfully!");
    })
}

module.exports = connectToMongo;