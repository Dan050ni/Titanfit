import React from 'react';
import { useNavigate } from 'react-router-dom';

const Servicios = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem('auth', 'false');
    navigate('/');
  };

  return (
    <div className="home-container">
      <aside className="sidebar">
        <h2>Titan-fit</h2>
        <button className="menu-btn" onClick={() => navigate('/home')}>Home</button>
        <button className="menu-btn" onClick={() => navigate('/contacto')}>Contacto</button>
        <button className="menu-btn" onClick={() => navigate('/acercade')}>Acerca de</button>
        <button className="menu-btn" onClick={logout}>Cerrar Sesión</button>
      </aside>
      <main className="home-main">
        <div className="home-content">
          <h1>Servicios para Miembros</h1>
          <ul>
            <li><strong>Actividades exclusivas:</strong> Acceso a clases especiales, entrenamientos premium y desafíos mensuales.</li>
            <li><strong>Talleres y webinars:</strong> Sesiones en vivo con entrenadores, nutricionistas y especialistas.</li>
            <li><strong>Recursos descargables:</strong> Guías de entrenamiento, recetas saludables y rutinas imprimibles.</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Servicios;
