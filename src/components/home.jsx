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

          <div className="section-block">
            <h3>Bienvenida personalizada</h3>
            <p>
              ¡Hola atleta! Prepárate para llevar tu entrenamiento al siguiente nivel con el apoyo de nuestra comunidad.
            </p>
          </div>

          <div className="section-block">
            <h3>Actividades recientes</h3>
            <p>
              Hemos añadido nuevas rutinas de fuerza y clases de HIIT esta semana para mantenerte en movimiento y motivado.
            </p>
          </div>

          <div className="section-block">
            <h3>Foros destacados</h3>
            <p>
              Únete al debate sobre nutrición post-entreno y comparte tus experiencias con otros miembros.
            </p>
          </div>

          <div className="section-block">
            <h3>Eventos próximos</h3>
            <p>
              ¡Participa en la competencia interna de levantamiento! Inscríbete antes del viernes y demuestra tu progreso.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

