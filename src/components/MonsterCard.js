// src/components/MonsterCard.js
import React from 'react';

const MonsterCard = ({ monster }) => {
  return (
    <div className="monster-card">
      <img src={monster.image} alt={monster.name} style={{ width: '100px', height: '100px' }} />
      <h3>{monster.name}</h3>
      <p><strong>Type:</strong> {monster.type}</p>
      <p><strong>Size:</strong> {monster.size}</p>
      <p><strong>Alignment:</strong> {monster.alignment}</p>
      <p><strong>AC:</strong> {monster.ac}</p>
      <p><strong>HP:</strong> {monster.hp}</p>
      <p><strong>Speed:</strong> {monster.speed}</p>
      <p><strong>Challenge:</strong> {monster.challenge}</p>
      <p><strong>Senses:</strong> {monster.senses}</p>
      <p><strong>Languages:</strong> {monster.languages}</p>
    </div>
  );
}

export default MonsterCard;
