import React from 'react';
import { ShieldCheck, Zap, Server, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const services = [
    {
        icon: ShieldCheck,
        title: "Segurança Eletrônica",
        description: "Sistemas avançados de CFTV IP, controle de acesso e alarmes monitorados para proteção total do seu patrimônio."
    },
    {
        icon: Zap,
        title: "Energia Solar",
        description: "Projetos fotovoltaicos personalizados para reduzir sua conta de energia e promover sustentabilidade."
    },
    {
        icon: Home,
        title: "Automação Residencial",
        description: "Controle iluminação, climatização e segurança da sua casa na palma da mão com soluções inteligentes."
    },
    {
        icon: Server,
        title: "Infraestrutura de Redes",
        description: "Cabeamento estruturado, fibra óptica e configuração de servidores para alta performance corporativa."
    }
];

const ServiceCard = ({ icon: Icon, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={cn(
            "p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default"
        )}
    >
        <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-300">
            <Icon size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
);

const ServicesSection = () => {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-secondary font-semibold tracking-wide uppercase text-sm">Nossas Especialidades</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">Soluções Integradas para Você</h2>
                    <p className="text-gray-600 text-lg">
                        Combinamos tecnologia e expertise para entregar projetos que transformam a maneira como você vive e trabalha.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <ServiceCard key={idx} {...service} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
