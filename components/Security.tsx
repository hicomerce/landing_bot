
import React from 'react';

const Security: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mx-auto bg-primary-100 h-16 w-16 flex items-center justify-center rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tu Seguridad es Nuestra Prioridad
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Diseñado con los más altos estándares de privacidad.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Sin Huella de Archivos</h3>
            <p className="text-gray-600">Tus documentos originales se eliminan permanentemente de nuestros servidores al finalizar el análisis.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Nube Segura</h3>
            <p className="text-gray-600">Tus reportes generados se almacenan con encriptación y acceso restringido solo a tu cuenta.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
