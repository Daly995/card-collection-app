// CardList.js
import React from 'react';

const CardList = ({ cards }) => {
  return (
    <div>
      <h2>Your Card Collection</h2>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            {card.name} - ${card.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;