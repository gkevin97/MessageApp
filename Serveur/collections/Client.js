const mongoose = require('mongoose');

// collection Utilisateur
const clientSchema = new mongoose.Schema({

  prenom:{
    type:String,
    required:true
  },
  nom:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  telephone:{
    type:String,
    required:true
  },
  motDePasse:{
    type:String,
    required:true
  },
  solde:{
    type:Number,
    required:false,
    default:100
  }
  
})

mongoose.model("Client", clientSchema);