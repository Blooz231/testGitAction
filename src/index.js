const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware JSON
app.use(express.json());

// Route principale
app.get('/', (req, res) => {
  res.json({ message: 'Hello World! CI/CD GitHub Actions fonctionne.' });
});

// Lancer le serveur seulement si on est pas en test
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
  });
}

module.exports = app; // pour les tests
