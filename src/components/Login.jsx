import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const user = usuarios.find(
      (u) => u.usuario === usuario && u.contrasena === contrasena
    );

    if (user) {
      localStorage.setItem('auth', 'true');
      navigate('/home');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <input type="text" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
        <button type="submit">Entrar</button>
        <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
      </form>
    </div>
  );
};

export default Login;
