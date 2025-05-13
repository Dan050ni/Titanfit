import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Ícono personalizado (soluciona problema de íconos por defecto en Leaflet)
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

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

          <div className="section-block">
            <h3>¿Tienes alguna duda o sugerencia?</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="mensaje">Tu mensaje:</label>
              <textarea
                id="mensaje"
                rows="4"
                placeholder="Escribe tu mensaje aquí..."
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '10px',
                  marginTop: '10px',
                  border: '1px solid #ccc',
                  fontSize: '16px',
                }}
              />
              <button
                type="submit"
                className="menu-btn"
                style={{ marginTop: '15px', width: '100%' }}
              >
                Enviar
              </button>
            </form>
          </div>

          <div className="section-block">
            <h3>¿Necesitas ayuda inmediata?</h3>
            <p>
              Contáctanos directamente vía WhatsApp: <strong>+52 55 1234 5678</strong>
            </p>
            <p>
              O escríbenos a: <strong>soporte@titanfit.com</strong>
            </p>
          </div>

          <div className="section-block">
            <h3>Ubicación</h3>
            <div style={{ height: '300px', width: '100%', borderRadius: '10px', overflow: 'hidden' }}>
              <MapContainer center={[19.4326, -99.1332]} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />
                <Marker position={[19.4326, -99.1332]} icon={customIcon}>
                  <Popup>Titan-fit HQ - Aquí estamos 💪</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contacto;
