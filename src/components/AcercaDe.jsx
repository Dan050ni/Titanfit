import React from 'react';
import { useNavigate } from 'react-router-dom';

const AcercaDe = () => {
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
        <button className="menu-btn" onClick={() => navigate('/servicios')}>Servicios</button>
        <button className="menu-btn" onClick={() => navigate('/contacto')}>Contacto</button>
        <button className="menu-btn" onClick={logout}>Cerrar Sesión</button>
      </aside>
      <main className="home-main">
        <div className="home-content">
          <h1>Acerca de Titan-fit</h1>

          <div className="section-block">
            <h3>Historia de la comunidad</h3>
            <p>
              Titan-fit nació con la visión de unir a personas apasionadas por el bienestar físico y mental. Desde nuestros inicios en 2020, hemos crecido como una comunidad comprometida con un estilo de vida saludable.
            </p>
          </div>

          <div className="section-block">
            <h3>Objetivo y valores</h3>
            <p>
              Nuestro objetivo es fomentar el crecimiento personal a través del ejercicio, la disciplina y el apoyo comunitario. Valoramos la constancia, la superación, el respeto y la inclusión.
            </p>
          </div>

          <div className="section-block">
            <h3>Equipo organizador</h3>
            <p>
              Contamos con un equipo de entrenadores certificados, nutricionistas y líderes de comunidad comprometidos con tu progreso. Cada miembro trabaja para que Titan-fit sea más que un gimnasio: una familia.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AcercaDe;
