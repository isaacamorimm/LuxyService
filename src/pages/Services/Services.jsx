import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Zap, ShieldCheck, Factory, ArrowRight, CheckCircle2, Cog } from 'lucide-react';
import { ContactSection } from '../../components/ContactSection/ContactSection';

export const Services = () => {
    // Transição "firme" com aspecto de engenharia para o B2B (Framer Motion)
    const techTransition = { duration: 0.5, type: 'spring', bounce: 0.1 };

    const services = [
        {
            icon: Building2,
            tag: "OP.FACILITIES",
            title: 'Manutenção Predial e Facilities',
            desc: 'Gestão integral da infraestrutura corporativa e industrial. Atuamos com manutenção preventiva, corretiva e preditiva, assegurando a continuidade operacional, mitigação de riscos e conformidade técnica das instalações.',
            bullets: [
                "Atendimento emergencial SLA restrito.",
                "Limpeza técnica e conservação.",
                "Gestão de áreas críticas."
            ]
        },
        {
            icon: Zap,
            tag: "OP.ENERGY",
            title: 'Instalação Elétrica e HVAC',
            desc: 'Engenharia aplicada a sistemas de energia e climatização. Especialistas em baixa e média tensão, operando e adequando cabines primárias, além de gestão completa de climatização com foco em eficiência energética.',
            bullets: [
                "Laudos Técnicos (SPDA, NR10, Termografia).",
                "PMOC p/ Split, VRF, Chillers e exaustão.",
                "Retrofit e adequação tarifária."
            ]
        },
        {
            icon: ShieldCheck,
            tag: "OP.SEC",
            title: 'Segurança Eletrônica e Acesso',
            desc: 'Desenvolvimento e implantação de arquiteturas avançadas de segurança patrimonial. Integramos sistemas de altíssima definição com centrais de monitoramento e plataformas unificadas de liberação automatizada.',
            bullets: [
                "CFTV IP de Alta Definição.",
                "Biometria facial homologada (KeyAccess).",
                "Controle de acesso de alto fluxo."
            ]
        },
        {
            icon: Factory,
            tag: "OP.SANT",
            title: 'Sistemas Prediais e ETA/ETE',
            desc: 'Operação diligente e manutenção especializada de Estações de Tratamento de Água (ETA) e Esgoto (ETE). Nosso corpo de engenharia gerencia todas as etapas dos processos de tratabilidade hídrica com rigor ambiental.',
            bullets: [
                "Coagulação, filtração e desinfecção.",
                "Gestão sustentável de lodo.",
                "Conformidade rígida c/ normativas ambientais."
            ]
        }
    ];

    return (
        <div className="w-full flex flex-col min-h-screen bg-gray-50 overflow-x-hidden">
            {/* 1. Hero Institucional (Clean Tech B2B) */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gray-50 overflow-hidden border-b border-gray-100 min-h-[60vh] flex items-center">
                {/* Padrão de Grade Arquitetônica (Luxo B2B) */}
                <div 
                    className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply" 
                    style={{ 
                        backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)', 
                        backgroundSize: '40px 40px' 
                    }} 
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
                        {/* Coluna de Texto (Esquerda) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={techTransition}
                            className="max-w-3xl lg:w-3/5"
                        >
                            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-800 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
                                <div className="w-2 h-2 rounded-full bg-[#FC4C04] animate-pulse" />
                                Operações Ativas
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-5xl font-black mb-6 tracking-tight leading-tight text-gray-900 uppercase pr-4">
                                Soluções de <br />
                                <span className="text-[#FC4C04]">Engenharia e Gestão</span>
                            </h1>
                            
                            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-10 pr-4">
                                Projetos técnicos desenhados sob medida para mitigar riscos operacionais e extrair a máxima performance da sua infraestrutura corporativa.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <a 
                                    href="#contato"
                                    className="inline-flex items-center justify-center gap-2 bg-[#FC4C04] hover:bg-[#E03C00] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-[#FC4C04]/30"
                                >
                                    Falar com um Especialista Técnico <ArrowRight size={20} />
                                </a>
                            </div>
                        </motion.div>

                        {/* Coluna de Imagem / Recorte (Direita) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ ...techTransition, delay: 0.2 }}
                            className="relative hidden lg:block lg:w-2/5"
                        >
                            {/* Moldura de Design Luxuoso */}
                            <div className="absolute inset-0 bg-[#FC4C04] rounded-3xl transform rotate-3 scale-105 opacity-10" />
                            <div className="absolute inset-0 bg-white rounded-3xl transform -rotate-2 scale-100 shadow-xl border border-gray-100" />
                            
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] border-[6px] border-white">
                                <img
                                    src="/portfolio/gestao-facilities-luxy.jpg"
                                    alt="Engenharia Operacional Luxy Service"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                {/* Overlay sutil para não perder a cara corporativa */}
                                <div className="absolute inset-0 bg-gray-900/10 mix-blend-multiply" />
                            </div>
                            
                            {/* Floating Badge (Selo de Confiança B2B) */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex items-center gap-4"
                            >
                                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900 uppercase tracking-wider">SLA Contratual</p>
                                    <p className="text-xs text-gray-500 font-medium">Conformidade B2B Total</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. Grid Inteligente de Serviços (2 Colunas B2B) */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Header da Seção de Serviços */}
                    <div className="text-center mb-16">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={techTransition}
                            className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight"
                        >
                            Escopo de Atuação e Integradoras
                        </motion.h2>
                    </div>

                    {/* Mudança drástica: de 3 pra 2 colunas largas, melhor uso do espaço real pra 4 itens */}
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ ...techTransition, delay: index * 0.1 }}
                                className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#FC4C04]/40 transition-all duration-300 group flex flex-col h-full"
                            >
                                {/* Header do Card */}
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-16 h-16 bg-gray-50 text-gray-900 rounded-xl border border-gray-200 flex items-center justify-center group-hover:bg-[#FC4C04] group-hover:text-white group-hover:border-[#FC4C04] transition-colors duration-300 shadow-sm relative overflow-hidden">
                                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shimmer" />
                                        <service.icon size={28} strokeWidth={2} className="relative z-10" />
                                    </div>
                                    <span className="font-mono text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full group-hover:text-[#FC4C04] group-hover:bg-[#FC4C04]/10 transition-colors">
                                        {service.tag}
                                    </span>
                                </div>
                                
                                {/* Conteúdo Textual */}
                                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-[#FC4C04] transition-colors">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium mb-8">
                                    {service.desc}
                                </p>

                                {/* Bullet Points "Escaneáveis" pro B2B */}
                                <div className="mt-auto">
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-100 pb-2">Escopo Principal</h4>
                                    <ul className="space-y-3">
                                        {service.bullets.map((bullet, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle2 className="text-[#FC4C04] mt-[2px] shrink-0" size={18} />
                                                <span className="text-gray-700 text-sm font-medium">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Secundário embaixo dos serviços */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ ...techTransition, delay: 0.4 }}
                        className="mt-16 text-center"
                    >
                        <p className="text-gray-500 font-medium mb-4">Precisa de um Projeto Integrado Envolvendo Múltiplas Áreas?</p>
                        <a href="#contato" className="inline-flex items-center gap-2 text-[#FC4C04] font-bold hover:text-[#E03C00] transition-colors group px-6 py-3 rounded-xl border-2 border-[#FC4C04] hover:bg-[#FC4C04]/5">
                            Solicitar Análise de Complexidade
                            <span className="transform group-hover:translate-x-1 transition-transform">
                                <ArrowRight size={20} />
                            </span>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Isolando seção de contato com âncora */}
            <div id="contato" className="relative z-10">
                <ContactSection />
            </div>
            
            {/* Tailwind Keyframes para o Shimmer Effect no Icone (se não existir no global css, ele ignora sem quebrar) */}
            <style>{`
                @keyframes shimmer {
                    100% { transform: translateX(100%) skew(-12deg); }
                }
                .animate-shimmer {
                    animation: shimmer 1.5s infinite;
                }
            `}</style>
        </div>
    );
};