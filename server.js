// server.js
const express = require('express');
const app = express();
const PORT = 3001;

// Dummy card data (replace with your own database logic)
const cards = [
  { id: 1, name: 'Card A', price: 5.99 },
  { id: 2, name: 'Card B', price: 8.49 },
  // Add more card entries as needed
];

app.get('/api/cards', (req, res) => {
  res.json(cards);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
