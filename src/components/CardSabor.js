import React from 'react';
import './CardSabor.css';

function CardSabor({ nome, imagem, onComprar }) {
  return (
    <div className="card-sabor" style={{ backgroundImage: `url(${imagem})` }}>
      <div className="card-overlay">
        <h3>{nome}</h3>
        <button onClick={onComprar}>Quero esse </button>
      </div>
    </div>
  );
}

export default CardSabor;