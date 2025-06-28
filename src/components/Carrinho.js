function Carrinho({ itens }) {
  return (
    <section id="carrinho">
      <h2>🛒 Carrinho</h2>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>
            {item.sabor} com {item.toppings.join(', ') || "sem toppings"} e {item.caldas.join(', ') || "sem calda"}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Carrinho;