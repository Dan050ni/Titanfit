import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contacto = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem('auth', 'false');
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Te contactaremos pronto.');
  };

  return (
    <div className="home-container">
      <aside className="sidebar">
        <h2>Titan-fit</h2>
        <button className="menu-btn" onClick={() => navigate('/home')}>Home</button>
        <button className="menu-btn" onClick={() => navigate('/servicios')}>Servicios</button>
        <button className="menu-btn" onClick={() => navigate('/acercade')}>Acerca de</button>
        <button className="menu-btn" onClick={logout}>Cerrar Sesión</button>
      </aside>
      <main className="home-main">
        <div className="home-content">
          <h1>Contacto</h1>
          <form onSubmit={handleSubmit}>
            <label>Tu mensaje o sugerencia:</label>
            <textarea rows="4" placeholder="Escribe tu mensaje aquí..." required style={{ width: '100%', padding: '10px', borderRadius: '10px', marginTop: '10px' }} />
            <button type="submit" className="menu-btn" style={{ marginTop: '15px' }}>Enviar</button>
          </form>

          <div style={{ marginTop: '30px' }}>
            <h3>¿Necesitas ayuda inmediata?</h3>
            <p>Contáctanos directamente vía WhatsApp: <strong>+123 456 789</strong></p>
            <p>O escríbenos a: <strong>soporte@titanfit.com</strong></p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contacto;
