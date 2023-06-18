const express = require('express');
const connectDB = require('./config/database');
const authRoutes = require('./app/routes/authRoutes');
const userRoutes = require('./app/routes/userRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});
