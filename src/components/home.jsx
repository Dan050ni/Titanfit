import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem('auth', 'false');
    navigate('/');
  };

  return (
    <div className="home-container">
      <aside className="sidebar">
        <h2>Titan-fit</h2>
        <button className="menu-btn" onClick={() => navigate('/servicios')}>Servicios</button>
        <button className="menu-btn" onClick={() => navigate('/contacto')}>Contacto</button>
        <button className="menu-btn" onClick={() => navigate('/acercade')}>Acerca de</button>
        <button className="menu-btn" onClick={logout}>Cerrar Sesión</button>
      </aside>
      <main className="home-main">
        <div className="home-content">
          <h1>¡Bienvenido a Titan-fit!</h1>
          <ul>
            <li><strong>Bienvenida personalizada:</strong> ¡Hola atleta! Prepárate para llevar tu entrenamiento al siguiente nivel.</li>
            <li><strong>Actividades recientes:</strong> Nuevas rutinas de fuerza y clases de HIIT añadidas esta semana.</li>
            <li><strong>Foros destacados:</strong> Únete al debate sobre nutrición post-entreno en nuestra comunidad.</li>
            <li><strong>Eventos próximos:</strong> Competencia interna de levantamiento – ¡Inscríbete antes del viernes!</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;

