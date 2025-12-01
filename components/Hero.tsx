import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Transforma tus Documentos en Decisiones Estratégicas
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Financial Health AI decodifica la complejidad de tus finanzas. Sube tus facturas y estados de cuenta; nuestra Inteligencia Artificial te brinda la claridad y las proyecciones que necesitas para hacer crecer tu negocio.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg">
            Comienza tu Análisis Gratis
          </a>
          <a href="#" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
            Ver Demo
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16">
        <div className="max-w-4xl mx-auto bg-white p-2 rounded-xl shadow-2xl ring-1 ring-gray-900/10">
          <div className="h-4 rounded-t-lg bg-gray-200 flex items-center px-2 gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          </div>
          <img src="financial-health-dashboard-ai-desktop-view.png" className="w-full rounded-b-lg" alt="Dashboard Screenshot" />
        </div>
      </div>
    </section>
  );
};

export default Hero;