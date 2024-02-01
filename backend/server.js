const express = require('express');
const mongoose = require('./config/db');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importe o módulo cors
const launchesRouter = require('./routes/launches');
const favoritesRouter = require('./routes/favorites');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors()); // Adicione o middleware cors
app.use(passport.initialize());

// Configurar as rotas
app.use('/api/launches', launchesRouter);
app.use('/api/user', favoritesRouter);

// Inicializando a conexão com o MongoDB Atlas usando a instância do mongoose
const atlasConnectionUrl = 'mongodb+srv://abdulaiseide312:Benfica@tropadomantem.n533h0k.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(atlasConnectionUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Conexão com o MongoDB Atlas estabelecida com sucesso!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
