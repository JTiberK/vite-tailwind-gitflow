// src/App.jsx
import React from 'react';
import 'react-dom/client';

// Importando Tailwind CSS
import 'tailwindcss/tailwind.css';

// src/App.jsx
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sección del encabezado **POR SECCIÓN DE PRUEBA DE CONFLICTO***/}
      <header className="bg-blue-500 p-4 text-white">
        <nav>
          <ul className="flex space-x-4">
            <li>Inicio</li>
            <li>Servicios</li>
            <li>Contacto</li>
          </ul>
        </nav>
      </header>

      {/* Sección del botón */}
      <div className="flex justify-center items-center p-4">
        <button className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">
          ¡Soy un botón Roto!
        </button>
      </div>

      {/* Sección de la cuadrícula */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div className="bg-blue-500 text-white p-4 rounded-lg">Elemento 1</div>
        <div className="bg-green-500 text-white p-4 rounded-lg">Elemento 2</div>
        <div className="bg-red-500 text-white p-4 rounded-lg">Elemento 3</div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg">
          Elemento 4
        </div>
      </div>

      {/* Sección del footer */}
      <footer className="bg-gray-800 p-4 text-white mt-8">
        <p>© 2023 Mi Aplicación</p>
        <div>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://facebook.com">Facebook</a>
        </div>
      </footer>
    </div>
  );
}
