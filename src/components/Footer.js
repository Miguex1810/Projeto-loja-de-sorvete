import React from "react";

function Footer() {
  const footerStyle = {
    background: 'linear-gradient(to right, #DC97B0, #EDE5EE)',
    color: '#6B4F4F',
    padding: '40px 20px',
    marginTop: '40px',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    boxShadow: '0 -4px 10px rgba(0,0,0,0.05)',
    textAlign: 'center',
  };

  const sectionStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
    padding: '20px 0',
  };

  const iconStyle = {
    fontSize: '2rem',
    marginBottom: '10px',
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#A67C7C',
    marginBottom: '6px',
  };

  const textStyle = {
    fontSize: '14px',
    lineHeight: '1.5',
  };

  return (
    <footer style={footerStyle}>
      <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>
        🍦 Sweet Ice 🍦
      </h2>
      <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '4px' }}>
        Feito com carinho por você
      </p>

      <h3 style={{ fontWeight: '600', fontSize: '16px', marginBottom: '20px' }}>
      VOCÊ QUER VENDER SORVETES ARTESANAIS COM A SWEET ICE?
      </h3>

      <div style={sectionStyle}>
        <div>
          <div style={iconStyle}>✅</div>
          <div style={titleStyle}>EXPERIENCIA</div>
          <p style={textStyle}>Mais de 40 anos de tradição em sorvetes artesanais.</p>
        </div>

        <div>
          <div style={iconStyle}>⭐</div>
          <div style={titleStyle}>SUCESSO</div>
          <p style={textStyle}>Modelo de negócio validado e lucrativo para você crescer com segurança</p>
        </div>

        <div>
          <div style={iconStyle}>👥</div>
          <div style={titleStyle}>APOIO</div>
          <p style={textStyle}>Acompanhamento completo para você iniciar e expandir sua operação com confiança</p>
        </div>

        <div>
          <div style={iconStyle}>🏆</div>
          <div style={titleStyle}>LIDERANÇA</div>
          <p style={textStyle}>Marca reconhecida nacionalmente pela qualidade e pelo sabor incomparável.</p>
        </div>
      </div>

      <p style={{ fontSize: '13px', marginBottom: '25px' }}>
        © {new Date().getFullYear()} Todos os direitos reservados
      </p>
    </footer>
  );
}

export default Footer;
