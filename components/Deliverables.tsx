import React from 'react';

const Deliverables: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resultados Profesionales Listos para Compartir</h2>
            <p className="text-lg text-gray-600 mb-6">
              Descarga tus análisis, comparativas y el Balance General en formato PDF profesional con un solo clic. Ideal para presentar a socios, inversores o a tu equipo directivo.
            </p>
            <a href="#" className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Ver Reporte de Ejemplo
            </a>
          </div>
          <div className="md:w-1/2">
             <div className="bg-white p-2 rounded-xl shadow-2xl ring-1 ring-gray-900/10 transform hover:scale-105 transition-transform">
                <div className="h-4 rounded-t-lg bg-gray-200 flex items-center px-2 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <img src="financial-health-ai-dashboard-details-desktop-1.png" alt="Sample Report" className="rounded-b-lg w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;