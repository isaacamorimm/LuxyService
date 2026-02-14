import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Loader2, ArrowUpRight } from 'lucide-react';

// Mock function to simulate API call
const fetchProjects = async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return mock data
    return [
        {
            id: 1,
            title: "Residencial Alphaville",
            category: "Energia Solar",
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=3264&auto=format&fit=crop",
            location: "São Paulo, SP"
        },
        {
            id: 2,
            title: "Edifício Horizon",
            category: "Segurança CFTV",
            image: "https://images.unsplash.com/photo-1558002038-1091fa0b619f?q=80&w=3270&auto=format&fit=crop",
            location: "Curitiba, PR"
        },
        {
            id: 3,
            title: "Indústria Metalúrgica",
            category: "Infraestrutura de Rede",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=3000&auto=format&fit=crop",
            location: "Campinas, SP"
        },
        {
            id: 4,
            title: "Smart Home Luxury",
            category: "Automação",
            image: "https://images.unsplash.com/photo-1558004092-177ae89d3421?q=80&w=3270&auto=format&fit=crop",
            location: "Rio de Janeiro, RJ"
        }
    ];
};

const ProjectsCarousel = () => {
    const { data: projects, isLoading, error } = useQuery({
        queryKey: ['projects'],
        queryFn: fetchProjects
    });

    if (isLoading) {
        return (
            <div className="py-24 flex justify-center items-center bg-gray-50">
                <Loader2 className="animate-spin text-primary" size={48} />
            </div>
        );
    }

    if (error) {
        return <div className="py-24 text-center text-red-500">Erro ao carregar projetos.</div>;
    }

    return (
        <section id="projects" className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 mb-12 flex flex-col md:flex-row justify-between items-end gap-4">
                <div>
                    <span className="text-secondary font-semibold tracking-wide uppercase text-sm">Portfólio Recente</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Casos de Sucesso</h2>
                </div>
                <button className="text-primary font-semibold hover:text-secondary transition-colors flex items-center gap-2">
                    Ver todos os projetos <ArrowUpRight size={20} />
                </button>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-8 container mx-auto px-4 snap-x">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="min-w-[300px] md:min-w-[400px] h-[500px] relative rounded-2xl overflow-hidden group snap-center cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/40 transition-colors z-10" />
                        <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />

                        <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <span className="text-secondary text-sm font-bold uppercase tracking-wider mb-2 block w-fit bg-white/90 px-3 py-1 rounded-sm backdrop-blur-sm">
                                {project.category}
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{project.title}</h3>
                            <p className="text-gray-200 text-sm flex items-center gap-2">
                                {project.location}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsCarousel;
