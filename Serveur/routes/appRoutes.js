const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');

//const Utilisateur = mongoose.model("utilisateur")

require('dotenv').config();

router.post('/inscription', (req,res) => {
    res.send('page inscription')
    const {nom, email, motDePasse} = req.body;

    if (!nom || !email || !motDePasse) {
        return res.status(422).send({ error: 'veuillez remplir tous les champs' });
    }

})

module.exports = router;