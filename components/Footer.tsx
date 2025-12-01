
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Toma el control de la salud financiera de tu empresa hoy.
        </h2>
        <a href="#" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-10 rounded-lg text-xl transition-transform transform hover:scale-105 shadow-lg inline-block mt-4">
          Crear mi Cuenta y Analizar
        </a>
      </div>
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Financial Health AI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
