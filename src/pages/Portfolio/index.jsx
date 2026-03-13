import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';

export const Portfolio = () => {
    const { data, loading, error } = useFetch('/projects'); // Example endpoint

    // Projetos reestruturados
    const projects = [
        { id: 1, title: 'Adequação de Cabines Primárias', tag: 'Elétrica', description: 'Retrofit completo de painéis de distribuição e adequação normativa NR10 para parque fabril contínuo.', img: '/portfolio/paineis-eletricos-industriais.jpg' },
        { id: 2, title: 'Sistemas VRF de Alta Eficiência', tag: 'HVAC', description: 'Implantação e gestão de PMOC térmico em torre corporativa.', img: '/portfolio/climatizacao-corporativa.jpg' },
        { id: 3, title: 'NOC e Monitoramento Analítico', tag: 'Segurança', description: 'Rede CFTV IP com inteligência perimetral e reconhecimento facial.', img: '/portfolio/central-de-monitoramento-cftv.jpg' },
        { id: 4, title: 'Qualificação de Áreas Limpas', tag: 'Facilities', description: 'Manutenção higiênico-sanitária e gestão metrológica de pressão para laboratórios.', img: '/portfolio/qualificacao-areas-limpas.jpg' },
        { id: 5, title: 'Retrofit de Infraestrutura', tag: 'Predial', description: 'Master plan de modernização de sistemas hidráulicos, elétricos e automação.', img: '/portfolio/infraestrutura-predial-corporativa.jpg' },
        { id: 6, title: 'Gestão Integrada de Facilities', tag: 'Facilities', description: 'Contrato full-service para condomínio empresarial, garantindo SLA de alto rigor.', img: '/portfolio/gestao-facilities-luxy.jpg' },
    ];

    if (loading) return <div className="text-center py-24 min-h-screen text-gray-500">Buscando projetos...</div>;
    if (error) return <div className="text-center py-24 min-h-screen text-red-500">Erro ao carregar portfólio.</div>;

    return (
        <div className="pt-24 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">Nosso <span className="text-[#FC4C04]">Portfólio</span></h2>
                    <p className="text-xl text-gray-500 font-medium">Cases reais elaborados pelo nosso corpo de engenharia.</p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                            <div className="h-48 overflow-hidden bg-gray-200">
                                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                            </div>
                            <div className="p-8">
                                <span className="inline-block text-xs font-bold text-[#FC4C04] uppercase tracking-wider mb-2">{project.tag}</span>
                                <h3 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">{project.title}</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

