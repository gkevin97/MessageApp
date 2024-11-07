const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const { sha256 } = require('js-sha256');
const Client = mongoose.model("Client");


require('dotenv').config();


router.post('/inscription', async (req,res) => {
    
    let { prenom, nom, email, telephone, motDePasse} = req.body;

    
    if (!prenom || !nom || !email || !telephone || !motDePasse) {
        return res.status(422).send({ error: 'veuillez remplir tous les champs' });}
    else
    {
        motDePasse = sha256(motDePasse);
        
        const client = new Client({
            prenom,
            nom,
            email,
            telephone,
            motDePasse
        })
        try{
            await client.save()
            res.json({ message: "utilisateur créer", client: { prenom, nom, email, telephone,motDePasse } });
            console.log(`utilisateur save`, client);
        }
        catch(err){
            console.log('db erreur', err)
        }
    }
});

module.exports = router;