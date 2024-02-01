const express = require('express');
const router = express.Router();
const axios = require('axios');
const cors = require('cors'); // Adicionando CORS
const passport = require('passport');
const { ensureAuthenticated } = require('../config/auth');

// Middleware CORS
router.use(cors());

/**
 * @route   GET /api/launches/upcoming
 * @desc    Obter os próximos lançamentos da SpaceX
 * @access  Private (Autenticação requerida)
 */
router.get('/upcoming', ensureAuthenticated, async (req, res) => {
  try {
    // Fazendo a solicitação à SpaceX API
    const response = await axios.get('https://api.spacexdata.com/v4/launches/upcoming');
    const launches = response.data;

    // Retornando os detalhes dos lançamentos
    res.json(launches);
  } catch (error) {
    console.error(error);

    // Enviando uma resposta detalhada em caso de erro
    res.status(500).json({
      error: 'Internal Server Error',
      details: error.message,
    });
  }
});

module.exports = router;
