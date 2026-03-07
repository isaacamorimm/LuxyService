import React from 'react';
import { Header } from '../components/Header/Header';
import { ContactSection } from '../components/ContactSection/ContactSection';
import { Footer } from '../components/Footer/Footer';
import { motion } from 'framer-motion';
import { ShieldCheck, Server, Video, Fingerprint, Network } from 'lucide-react';

const CftvIp = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
            <Header />
            <main className="flex-grow pt-20">
                {/* Hero Section Específica */}
                <section className="py-24 relative bg-gray-50 border-b border-gray-100 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(47,0,105,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(47,0,105,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }} />
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                            <div className="inline-flex items-center gap-2 bg-[#2F0069]/10 border border-[#2F0069]/20 text-[#2F0069] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
                                <ShieldCheck size={16} /> Segurança Corporativa Avançada
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight leading-tight">CFTV IP & Controle <br /> de <span className="text-[#FC4C04]">Acesso</span></h1>
                            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                                Soluções de monitoramento de altíssima definição e gestão de acessos para condomínios, indústrias e data centers. A evolução máxima na blindagem do seu patrimônio.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Seção Arquitetura Técnica */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Arquitetura de VMS e Infraestrutura de Rede</h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    A base de qualquer sistema de segurança robusto é sua arquitetura de rede. Projetamos topologias IP em anel ou estrela, com backbones em fibra óptica e switches gerenciáveis PoE+ de alta capacidade, garantindo zero latência e banda de sobra para fluxos de vídeo (streams) de 4K a 8K.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    Especialistas na integração de VMS (Video Management System) enterprise-grade. Nossa equipe implementa e gerencia os maiores softwares do mercado global, configurando análises de vídeo avançadas, como LPR (Leitura de Placas) e detecção de perímetro.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-gray-800 font-medium">
                                        <div className="w-8 h-8 rounded bg-[#FC4C04]/10 text-[#FC4C04] flex items-center justify-center"><Server size={18} /></div>
                                        Servidores Dedicados e Storage RAID para Alta Disponibilidade
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-800 font-medium">
                                        <div className="w-8 h-8 rounded bg-[#FC4C04]/10 text-[#FC4C04] flex items-center justify-center"><Video size={18} /></div>
                                        Integração com plataformas líderes (Ex: Digifort, Milestone)
                                    </li>
                                </ul>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                                <img src="/portfolio/central-de-monitoramento-cftv.jpg" alt="Central de Monitoramento" className="w-full h-auto object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-8">
                                    <span className="text-white font-bold text-lg">Central de Operações Integrada (NOC)</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Seção Controle de Acesso */}
                <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black mb-4">Acesso Físico Inteligente</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                                Autenticação multifator para liberação de portas, catracas e cancelas vehiculares operando com a mais alta criptografia.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: Fingerprint, title: "Biometria Facial", text: "Leitores de reconhecimento facial com tecnologia anti-spoofing e velocidade de liberação em milissegundos." },
                                { icon: Network, title: "Integração Enterprise", text: "Comunicação nativa com sistemas C-Cure 9000 e Amadeus para a junção da camada lógica à camada física." },
                                { icon: ShieldCheck, title: "Homologação Oficial", text: "Empresa parceira técnica homologada da KeyAccess Tecnologias e líderes de mercado em fechaduras e controladoras." }
                            ].map((feature, idx) => (
                                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2, duration: 0.8 }} className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm">
                                    <div className="w-14 h-14 bg-[#FC4C04] text-white rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-[#FC4C04]/20">
                                        <feature.icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">{feature.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Banner CTA */}
                <section className="py-20 bg-[#FC4C04] text-white text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Eleve o Nível da Sua Segurança Hoje</h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
                            Converse com nossos engenheiros especialistas para desenharmos uma proposta técnica definitiva para o seu negócio.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-white text-[#FC4C04] font-black py-4 px-10 rounded-full shadow-2xl hover:bg-gray-50 transition-all transform hover:-translate-y-1 hover:shadow-orange-900/50 uppercase tracking-widest text-sm"
                        >
                            Solicitar Projeto Técnico
                        </a>
                    </div>
                </section>

                <div id="contact"><ContactSection /></div>
            </main>
            <Footer />
        </div>
    );
};

export default CftvIp;
