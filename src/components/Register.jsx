import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const yaExiste = usuarios.find((u) => u.usuario === usuario);
    if (yaExiste) {
      alert('El usuario ya existe');
      return;
    }

    usuarios.push({ usuario, email, contrasena });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Registro exitoso');
    navigate('/');
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Registro</h2>
        <input type="text" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
        <button type="submit">Registrarse</button>
        <p>¿Ya tienes cuenta? <Link to="/">Iniciar Sesión</Link></p>
      </form>
    </div>
  );
};

export default Register;
