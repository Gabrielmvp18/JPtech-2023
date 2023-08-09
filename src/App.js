import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Redefinir from './paginas/Redefinir';
import Login from './paginas/Login';
import Home from './paginas/Home';
import Formulario from './paginas/Formulario';
import Configuracao from './paginas/Configuracao';
import React from 'react';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/redefinir" element={<Redefinir />} />
        <Route path="/home" element={<Home />} />
        <Route path="/configuracao" element={<Configuracao />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </Router>
  );
}

export default App;
