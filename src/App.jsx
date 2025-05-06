import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/home';
import Servicios from './components/Servicios'; // Asegúrate de tener esta línea
import Contacto from './components/Contacto';
import AcercaDe from './components/AcercaDe';
import ProtectedRoute from './auth/ProtectedRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/servicios"
        element={
          <ProtectedRoute>
            <Servicios />
          </ProtectedRoute>
        }
      />
      <Route
        path="/contacto"
        element={
          <ProtectedRoute>
            <Contacto />
          </ProtectedRoute>
        }
      />
      <Route
        path="/acercade"
        element={
          <ProtectedRoute>
            <AcercaDe />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
