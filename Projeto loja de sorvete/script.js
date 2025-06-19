function adicionarCarrinho() {
  const sabor = document.getElementById("sabor").value;

  const toppings = Array.from(document.querySelectorAll('.checkbox-group input[type="checkbox"]'))
    .filter(el => el.checked)
    .map(el => el.value);

  const item = {
    sabor,
    toppings
  };

  const lista = document.getElementById("lista-carrinho");
  const li = document.createElement("li");
  li.textContent = `🍨 ${item.sabor} com ${toppings.join(", ") || "sem topping/calda"}`;
  lista.appendChild(li);

  // Limpa seleção
  document.querySelectorAll('.checkbox-group input[type="checkbox"]').forEach(el => el.checked = false);
}