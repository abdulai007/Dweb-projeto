const mongoose = require('mongoose');

// Substitua a URL abaixo pela sua string de conexão do MongoDB Atlas
const atlasConnectionUrl = 'mongodb+srv://abdulaiseide312:Benfica@tropadomantem.n533h0k.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(atlasConnectionUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Conexão com o MongoDB Atlas estabelecida com sucesso!');
});

// Exporte a instância de mongoose para outros módulos se necessário
module.exports = mongoose;
