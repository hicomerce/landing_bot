import React from 'react';

const features = [
  {
    category: "Claridad Total",
    items: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 00-4-4H3V9h2a4 4 0 004-4V3l5 4-5 4v-2H7a2 2 0 00-2 2v2h2l5-4-5-4v2a4 4 0 004 4h2v2h-2a4 4 0 00-4 4v2l-5-4 5-4z" />
          </svg>
        ),
        title: "Análisis Financiero Automatizado",
        description: "Simplemente arrastra tus documentos (CFDI, reportes, estados de cuenta). Nuestra IA extrae, identifica y estructura automáticamente tus ingresos, gastos, activos y pasivos.",
        tags: ["Soporte multi-documento", "Extracción inteligente"]
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        ),
        title: "Dashboard Interactivo",
        description: "Visualiza la salud de tu negocio de un vistazo. Monitorea KPIs en tiempo real como EBITDA, Margen Neto y Liquidez Corriente a través de gráficos dinámicos.",
        tags: []
      },
    ]
  },
  {
    category: "Inteligencia a tu Servicio",
    items: [
       {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        ),
        title: "InsightBot: Tu CFO 24/7",
        description: "Chatea con tus datos. Pregunta \"¿Cuál fue mi gasto más alto este mes?\" y recibe respuestas en lenguaje natural. InsightBot entiende tu contexto y te sugiere preguntas clave.",
        image: "financial-health-ai-dashboard-mobile.png"
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        title: "Recomendaciones Accionables",
        description: "No solo te damos números, te decimos qué hacer. Recibe estrategias priorizadas por impacto para reducir deuda, optimizar gastos y acelerar tu ciclo de cobranza.",
        tags: []
      }
    ]
  },
   {
    category: "Visión a Futuro",
    items: [
       {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        ),
        title: "Proyecciones y Escenarios \"What-If\"",
        description: "Anticípate a los riesgos. Simula escenarios como \"¿Qué pasa si mis ventas suben un 15%?\" y deja que la IA calcule el impacto potencial en tu flujo de caja y rentabilidad.",
        tags: []
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        title: "Comparación de Períodos",
        description: "Detecta tendencias antes de que sean problemas. Compara Q1 vs Q2 y visualiza la evolución de tus métricas con tablas comparativas de variación absoluta y porcentual.",
        image: "financial-health-ai-comparative-analysis.png"
      }
    ]
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {features.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">{category.category}</h2>
            <p className="text-center text-gray-500 mb-12">Descubre cómo transformamos datos en decisiones.</p>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}>
              {category.items.map((feature, fIndex) => (
                <div key={fIndex} className={`flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl ${feature.image ? 'md:col-span-2 bg-gray-50' : ''}`}>
                    <div className={`${(fIndex % 2 !== 0 && feature.image) ? 'md:order-2' : ''} flex-1`}>
                        <div className="flex items-center mb-4">
                            <div className="bg-primary-100 p-3 rounded-full mr-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-4">{feature.description}</p>
                        <div className="flex flex-wrap gap-2">
                        {feature.tags?.map(tag => (
                            <span key={tag} className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded-full">{tag}</span>
                        ))}
                        </div>
                    </div>
                   {feature.image && (
                     <div className={`flex-1 flex justify-center items-center ${(fIndex % 2 !== 0 && feature.image) ? 'md:order-1' : ''}`}>
                       {feature.title === 'InsightBot: Tu CFO 24/7' ? (
                          <div className="relative mx-auto border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[552px] w-[272px] shadow-xl">
                              <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[13px] top-[64px] rounded-l-lg"></div>
                              <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[13px] top-[124px] rounded-l-lg"></div>
                              <div className="h-[48px] w-[3px] bg-gray-800 absolute -right-[13px] top-[128px] rounded-r-lg"></div>
                              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
                                  <img src={feature.image} className="w-full h-full object-cover" alt={feature.title} />
                              </div>
                          </div>
                       ) : feature.title === 'Comparación de Períodos' ? (
                        <div className="bg-white p-2 rounded-xl shadow-2xl ring-1 ring-gray-900/10 w-full">
                            <div className="h-4 rounded-t-lg bg-gray-200 flex items-center px-2 gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            </div>
                            <img src={feature.image} alt={feature.title} className="rounded-b-lg w-full" />
                        </div>
                       ) : (
                         <img src={feature.image} alt={feature.title} className="rounded-lg shadow-xl max-h-96" />
                       )}
                     </div>
                   )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;