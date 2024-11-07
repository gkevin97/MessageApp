const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// important de la basse de donné et collections
require('./database/db')
require('./collections/Client')

// importation des routes
const listRoute = require('./routes/route');


app.use(bodyParser.json());
app.use(listRoute);


app.listen(port, () => {
    console.log(`Serveur en cours port ${port}`);
})