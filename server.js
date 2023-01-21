const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

app.use(express.static('public'));

const connectionString = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.PASSWORD}@mongosetupcluster.li7admh.mongodb.net/Inventory?retryWrites=true&w=majority`

mongoose.set('strictQuery', false);

mongoose.connect(connectionString, {
    
})


app.get('/', (req,res) => {
    console.log("Welcome to the homepage!")
});

app.listen(5000, () => {
    console.log("Server listening on 5000")
});