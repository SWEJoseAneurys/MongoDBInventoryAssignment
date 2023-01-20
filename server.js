const express = require('express');


const app = express();

app.use(express.static('public'));

app.get('/', (req,res) => {
    console.log("Welcome to the homepage!")
});

app.listen(5000, () => {
    console.log("Server listening on 5000")
});