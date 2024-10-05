const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('serveur connecter à MongoDB');
})
.catch((err) => {
    console.log('serveur non connecter à MongoDB',err);
});
