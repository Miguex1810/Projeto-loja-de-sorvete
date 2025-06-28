import { useState } from 'react';

function MontarSorvete({ adicionar }) {
  const [sabor, setSabor] = useState('Baunilha');
  const [toppings, setToppings] = useState([]);
  const [caldas, setCaldas] = useState([]);

  const toggleItem = (item, list, setList) => {
    setList(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleAdd = () => {
    adicionar({ sabor, toppings, caldas });
    setToppings([]);
    setCaldas([]);
  };

  return (
    <section id="montar">
      <h2>Monte seu Sorvete</h2>

      <label>Sabor:</label>
      <select value={sabor} onChange={e => setSabor(e.target.value)}>
        <option>Baunilha</option>
        <option>Morango</option>
        <option>Chocolate</option>
        <option>Manga</option>
      </select>

      <h4>Toppings:</h4>
      {["Granulado", "Confete", "Paçoca"].map(item => (
        <label key={item}>
          <input
            type="checkbox"
            checked={toppings.includes(item)}
            onChange={() => toggleItem(item, toppings, setToppings)}
          />
          {item}
        </label>
      ))}

      <h4>Caldas:</h4>
      {["Chocolate", "Morango", "Caramelo"].map(item => (
        <label key={item}>
          <input
            type="checkbox"
            checked={caldas.includes(item)}
            onChange={() => toggleItem(item, caldas, setCaldas)}
          />
          {item}
        </label>
      ))}

      <br />
      <button onClick={handleAdd}>Adicionar ao Carrinho</button>
    </section>
  );
}

export default MontarSorvete;