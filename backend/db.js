const express = require('express')
const mongoose = require('mongoose')

const path = require('path');
connectToMongo=()=>{


mongoose.connect('mongodb://0.0.0.0:27017/Rest-Api-social',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () =>{
    console.log("Database connected");
});
}
const app = express();

module.exports = connectToMongo;


/*mongoose is not accepting callbacks here */

