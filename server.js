const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
let Item = require('./Models/item.js');


const app = express();

app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const connectionString = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.PASSWORD}@mongosetupcluster.li7admh.mongodb.net/Inventory?retryWrites=true&w=majority`

mongoose.set('strictQuery', false);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log("connected to mongo");
});


app.post('/create_item', async (req,res) => {
    console.log(req.body);
    let response = await Item.create(req.body);
    res.send(response);
});

app.get('/all_items', async (req,res) => {
    let response = await Item.find({});
    console.log(response);
    res.json(response);
});

app.listen(5000, () => {
    console.log("Server listening on 5000")
});