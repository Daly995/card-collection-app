// App.js
import React, { useState, useEffect } from 'react';
import CardList from './CardList';

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch card data from your API
    fetch('https://example.com/api/cards')
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Card Collection App</h1>
      <CardList cards={cards} />
    </div>
  );
};

export default App;
