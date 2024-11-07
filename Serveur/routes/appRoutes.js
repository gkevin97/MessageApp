const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const Utilisateur = mongoose.model("utilisateur");

require('dotenv').config();


router.post('/inscription', async (req,res) => {
    
    let { nom, prenom, email, motDePasse } = req.body;

    if (!nom || !prenom || !email || !motDePasse) {
        return res.status(422).send({ error: 'veuillez remplir tous les champs' });
    }
    else{

        const utilisateur = new Utilisateur({
            nom,
            prenom,
            email,
            motDePasse
        })
        try{
            await utilisateur.save()
            console.log(`utilisateur save`, utilisateur);
        }
        catch(err){
            return res.status(422).send({ error: 'veuillez remplir tous les champs' });
        }

    }
});

module.exports = router;