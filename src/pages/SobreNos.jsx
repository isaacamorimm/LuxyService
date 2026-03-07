import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Diamond, ShieldCheck, Clock, CheckCircle2, Zap, HardHat, Award, Building2, ArrowRight } from 'lucide-react';
import { ContactSection } from '../components/ContactSection/ContactSection';

const timelineData = [
    { year: "2009", title: "Nossa Origem", description: "Fundação da Lumens Projetos Elétricos, o início do nosso grupo." },
    { year: "2010", title: "Foco em Saúde", description: "Expansão para projetos e instalação de subestações em hospitais." },
    { year: "2012", title: "Expansão de Serviços", description: "Retrofit de proteção e controle em concessionárias de energia." },
    { year: "2019", title: "Sustentabilidade", description: "Início dos projetos voltados para eficiência e energia sustentável." },
    { year: "2021", title: "Luxy Solar", description: "Fundação da Luxy Solar, consolidando nossa atuação em energia fotovoltaica." },
    { year: "2022", title: "Reafirmação no Mercado", description: "Crescimento contínuo no setor de manutenção predial e em subestações de energia." },
    { year: "2025", title: "Luxy Service", description: "Fundação com foco prático no segmento de facilities, manutenção predial, controle de acesso e CFTV." },
];

const valuesData = [
    {
        icon: Target,
        title: "Missão",
        description: "Oferecer soluções integradas e sustentáveis em energia, manutenção e facilities, com excelência técnica, inovação e compromisso com a eficiência operacional dos nossos clientes."
    },
    {
        icon: Eye,
        title: "Visão",
        description: "Ser referência nacional em engenharia, energia renovável e serviços de manutenção predial e industrial, promovendo um futuro mais sustentável, seguro e eficiente."
    },
    {
        icon: Diamond,
        title: "Valores",
        description: "Agimos com sustentabilidade, excelência técnica e ética, sempre com foco nas necessidades do cliente. Valorizamos nossa equipe, incentivamos a inovação e mantemos o comprometimento."
    }
];

export const SobreNos = () => {
    // Transição "firme" com aspecto de engenharia para o B2B (Framer Motion)
    const techTransition = { duration: 0.5, type: 'spring', bounce: 0.1 };

    return (
        <div className="flex flex-col min-h-screen bg-white overflow-hidden">
            
            {/* 1. Hero Institucional (Com CTA de avanço adicionado) */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gray-900 overflow-hidden text-white flex items-center justify-center min-h-[60vh]">
                <div className="absolute inset-0">
                    <img
                        src="/portfolio/gestao-facilities-luxy.jpg"
                        alt="Infraestrutura Luxy Service"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900/85 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={techTransition}
                        className="max-w-4xl mx-auto flex flex-col items-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#FC4C04]/20 border border-[#FC4C04]/30 text-[#FC4C04] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-sm">
                            <Building2 size={16} /> Soluções Completas em Facilities
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tight leading-tight">
                            Nossa Essência <br />
                            <span className="text-[#FC4C04]">Nossa História</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-3xl mb-10 text-center">
                            Excelência técnica e inovação para garantir a eficiência operacional das suas instalações, com segurança e confiabilidade absoluta.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                            <a 
                                href="#diferenciais"
                                className="inline-flex items-center justify-center gap-2 bg-[#FC4C04] hover:bg-[#E03C00] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-[#FC4C04]/30"
                            >
                                Nossos Diferenciais <ArrowRight size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Excelência e Compliance (Puxado para CIMAAA - Conversão B2B imediata) */}
            <section id="diferenciais" className="py-24 bg-white relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={techTransition}
                        >
                            <div className="inline-flex items-center gap-2 bg-[#FC4C04]/10 text-[#FC4C04] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
                                <ShieldCheck size={16} /> Segurança e Conformidade
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
                                Operação Impecável,<br />Risco Zero.
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Nosso plantão emergencial 24/7 e o estrito cumprimento das Normas Regulamentadoras garantem que a infraestrutura crítica do seu negócio nunca pare. Escolha a tranquilidade do compliance B2B absoluto.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                {[
                                    { icon: Clock, text: "Plantão 24/7", desc: "Equipes em prontidão contínua." },
                                    { icon: Zap, text: "NR-10", desc: "Segurança total em elétrica." },
                                    { icon: HardHat, text: "NR-35", desc: "Especialistas em altura." },
                                    { icon: Award, text: "PMOC", desc: "Gestão de climatização." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 p-4 rounded-xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-colors">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#FC4C04] shrink-0 border border-gray-100 shadow-sm">
                                            <item.icon size={22} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.text}</h4>
                                            <p className="text-sm text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <a href="#contato" className="inline-flex items-center gap-2 text-[#FC4C04] font-bold hover:text-[#E03C00] transition-colors group px-4 py-2">
                                Solicitar Proposta Técnica
                                <span className="transform group-hover:translate-x-1 transition-transform">
                                    <ArrowRight size={20} />
                                </span>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={techTransition}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FC4C04] to-orange-400 rounded-3xl transform rotate-1 blur-lg opacity-20" />
                            <div className="bg-gray-900 rounded-3xl p-8 lg:p-10 text-white relative shadow-2xl overflow-hidden border border-gray-800">
                                <div className="absolute -right-8 -top-8 opacity-5">
                                    <ShieldCheck size={280} />
                                </div>
                                <h3 className="text-3xl font-bold mb-6 relative z-10 tracking-tight">Compliance <span className="text-[#FC4C04]">B2B</span> Integrado</h3>
                                <p className="text-gray-300 mb-8 relative z-10 leading-relaxed lg:text-lg">
                                    Empresas de grande porte exigem parceiros homologados. Possuímos toda a documentação estrutural e seguros de responsabilidade civil para terceiros.
                                </p>
                                <ul className="space-y-4 relative z-10">
                                    {[
                                        "Acionamento via NOC corporativo próprio.",
                                        "PPRA, PCMSO e ASO sempre atualizados.",
                                        "Certidões negativas fiscais unificadas.",
                                        "Veículos técnicos para reposição crítica."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm shadow-sm transition-colors hover:bg-white/10">
                                            <CheckCircle2 className="text-[#FC4C04] shrink-0" size={20} />
                                            <span className="text-gray-100 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Nossa História (Linha do Tempo focada na Expertise técnica) */}
            <section className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={techTransition}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Evolução da <span className="text-[#FC4C04]">Expertise</span></h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprovada jornada de aprimoramento em <strong className="text-gray-900 font-bold">Engenharia</strong>, desde energia até a operação de facilities e compliance corporativo.
                        </p>
                    </motion.div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2 rounded-full" />

                        {timelineData.map((item, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, margin: "-50px" }}
                                    transition={{ ...techTransition, delay: 0.1 }}
                                    className={`relative flex items-center mb-12 md:mb-16 flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#FC4C04] rounded-full transform -translate-x-1/2 shadow-[0_0_0_4px_rgba(252,76,4,0.2)] z-10" />

                                    <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative group">
                                            <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-gray-100 transform rotate-45 ${isEven ? '-right-2 border-t border-r' : '-left-2 border-b border-l'}`} />
                                            <div className="md:hidden absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-gray-100 transform rotate-45 -left-2 border-b border-l" />

                                            <span className="text-[#FC4C04] font-black text-2xl mb-2 block">{item.year}</span>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. Missão, Visão e Valores (Grid Moderno - DNA) */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Nosso DNA Corporativo</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {valuesData.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ ...techTransition, delay: idx * 0.1 }}
                                className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#FC4C04]/50 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden flex flex-col items-center text-center"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-8 -mt-8 transition-colors group-hover:bg-[#FC4C04]/5" />
                                <div className="w-14 h-14 mx-auto bg-[#FC4C04]/10 text-[#FC4C04] rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#FC4C04] group-hover:text-white transition-colors duration-300 relative z-10">
                                    <item.icon size={28} strokeWidth={2.5} />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight relative z-10">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm lg:text-base relative z-10">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Wrapper isolando a seção de contato com ID para ancoragem segura */}
            <div id="contato">
                <ContactSection />
            </div>
        </div>
    );
};