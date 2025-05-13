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

          <div className="section-block">
            <h3>Actividades exclusivas</h3>
            <p>
              Acceso a clases especiales, entrenamientos premium y desafíos mensuales diseñados para mejorar tu rendimiento y motivación.
            </p>
          </div>

          <div className="section-block">
            <h3>Talleres y webinars</h3>
            <p>
              Participa en sesiones en vivo con entrenadores, nutricionistas y especialistas del bienestar físico y mental.
            </p>
          </div>

          <div className="section-block">
            <h3>Recursos descargables</h3>
            <p>
              Descarga guías de entrenamiento, recetas saludables, rutinas personalizadas e imprimibles para seguir en casa o en el gimnasio.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Servicios;
