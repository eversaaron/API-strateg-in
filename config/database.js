const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGODB_URL;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
})
  .then(() => {
    console.log('Connexion à la base de données réussie !');
  })
  .catch((error) => {
    console.error('Erreur lors de la connexion à la base de données :', error);
    process.exit(1);
  });

module.exports = mongoose.connection;
