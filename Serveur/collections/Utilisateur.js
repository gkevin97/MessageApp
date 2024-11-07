const mongoose = require('mongoose');

// collection Utilisateur
const UtilisateurSchema = new mongoose.Schema({

  nom:{
    type:String,
    required:true
  },
  prenom:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  motDePasse:{
    type:String,
    required:true
  },
  
})

mongoose.model("utilisateur", UtilisateurSchema);