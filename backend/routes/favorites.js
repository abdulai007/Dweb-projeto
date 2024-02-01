// backend/routes/favorites.js
const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const User = require('../models/User');

// Rota para obter os favoritos do usuário autenticado
router.get('/favorites', ensureAuthenticated, async (req, res) => {
  try {
    const user = req.user;
    res.json(user.favorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Rota para adicionar um lançamento aos favoritos do usuário autenticado
router.post('/add-favorite/:launchId', ensureAuthenticated, async (req, res) => {
  try {
    const user = req.user;
    const launchId = req.params.launchId;

    // Verifica se o lançamento já está nos favoritos
    if (!user.favorites.includes(launchId)) {
      user.favorites.push(launchId);
      await user.save();
    }

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
