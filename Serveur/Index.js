const express = require('express');
const post = 3000;

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.send('page accueil')
})