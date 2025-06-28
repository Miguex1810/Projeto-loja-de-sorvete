import './App.css';
import Navbar from './components/Navbar';
import MontarSorvete from './components/MontarSorvete';
import Carrinho from './components/Carrinho';
import CardSabor from './components/CardSabor';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
 const sabores = [
    { nome: 'Sorvete de Baunilha', imagem: '/img/baunilha.png' },
    { nome: 'Sorvete de Morango', imagem: '/img/morango.png' },
    { nome: 'Sorvete de Chocolate', imagem: '/img/chocolate.png' },
    { nome: 'Sorvete de Pistache', imagem: '/img/pistache.png' },
  ];

  const [carrinho, setCarrinho] = useState([]);

  const adicionarCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
  };


  return (
    <>
      <Navbar />
      <div className="grid-sabores">
        {sabores.map((sabor, index) => (
          <CardSabor
            key={index}
            nome={sabor.nome}
            imagem={sabor.imagem}
            onComprar={() => adicionarCarrinho(sabor.nome)}
          />
        ))}
      </div>
      <div><Footer /></div>

    </>
  );
}

export default App;