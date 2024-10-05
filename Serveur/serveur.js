const port = 3000;
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const listRoute = require('./routes/appRoutes');

app.use(bodyParser.json());
app.use(listRoute);

// important de la basse de donné et collections
require('./database/db')
require('./collections/Utilisateur')

app.listen(port, () => {
    console.log(`Serveur en cours port ${port}`);
})