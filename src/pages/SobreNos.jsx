import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, HardHat, Clock, CheckCircle2, Building2, Zap } from 'lucide-react';
import { ContactSection } from '../components/ContactSection/ContactSection';

export const SobreNos = () => {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-white">
            {/* Hero Institucional */}
            <section className="relative py-24 bg-gray-900 overflow-hidden text-white">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="/portfolio/gestao-facilities-luxy.jpg"
                        alt="Infraestrutura Luxy Service"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-[#FC4C04]/20 border border-[#FC4C04]/30 text-[#FC4C04] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
                            <Building2 size={16} /> Infraestrutura de Engenharia
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight leading-tight">
                            Solidez Institucional <br />e <span className="text-[#FC4C04]">Compliance</span>
                        </h1>
                        <p className="text-xl text-gray-300 font-medium leading-relaxed">
                            A Luxy Service é a parceira estratégica definitiva para condomínios, indústrias e corporações que exigem rigor técnico, transparência metrológica e gestão ininterrupta (24/7) de suas instalações.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Certificações e Normas Regulamentadoras */}
            <section className="py-24 bg-gray-50 border-b border-gray-100 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Segurança do Trabalho e Normas Restritas</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Operamos sob estrito cumprimento das Normas Regulamentadoras (MTE), garantindo risco zero para nossos clientes corporativos.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "NR-10", desc: "Segurança em Instalações e Serviços em Eletricidade. Corpo técnico com treinamentos atualizados e proficiência comprovada.", icon: Zap },
                            { name: "NR-35", desc: "Trabalho em Altura. Operações com EPIs rigorosos, linha de vida e protocolos de resgate certificados.", icon: HardHat },
                            { name: "NR-12", desc: "Segurança no Trabalho em Máquinas e Equipamentos. Foco em operações industriais e casa de máquinas de condomínios.", icon: ShieldCheck },
                            { name: "PMOC", desc: "Plano de Manutenção, Operação e Controle conforme a Lei 13.589/2018 para sistemas de climatização.", icon: Award }
                        ].map((nr, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-[#FC4C04] transition-colors group"
                            >
                                <div className="w-12 h-12 bg-[#FC4C04]/10 text-[#FC4C04] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FC4C04] group-hover:text-white transition-colors duration-300">
                                    {React.createElement(nr.icon, { size: 24 })}
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-3">{nr.name}</h3>
                                <p className="text-gray-600 font-medium leading-relaxed text-sm">{nr.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Plantão 24/7 e SLA */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6 border border-green-200">
                                <Clock size={16} /> Operação Ininterrupta
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Plantão Emergencial 24/7</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Entendemos que a infraestrutura crítica do seu negócio não pode parar. Por isso, a Luxy Service mantém bases operacionais estratégicas e equipes de pronta-resposta mobilizáveis 24 horas por dia, 7 dias por semana.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Acionamento via NOC (Network Operations Center) próprio.",
                                    "SLA de atendimento contratual rigoroso.",
                                    "Engenheiros e técnicos de sobreaviso contínuo.",
                                    "Veículos oficina equipados com peças de reposição crítica."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-[#FC4C04] mt-1 shrink-0" size={20} />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                            <div className="bg-gray-900 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <ShieldCheck size={180} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Garantia de Compliance B2B</h3>
                                <p className="text-gray-300 mb-8 relative z-10 leading-relaxed">
                                    Empresas de grande porte exigem parceiros homologados. Possuímos PPRA, PCMSO, certidões negativas unificadas e seguros de responsabilidade civil para terceiros, assegurando que o síndico profissional ou o diretor de facilities durma tranquilo.
                                </p>
                                <div className="bg-white/10 border border-white/20 rounded-xl p-6 relative z-10 backdrop-blur-md">
                                    <h4 className="font-bold text-[#FC4C04] uppercase tracking-wider text-sm mb-2">Escopo Documental de Integração</h4>
                                    <p className="text-white text-sm font-medium">Asio, Fichas de EPI, ASO atualizado, Treinamentos NR, Certificados KEYACCESS e Laudos Calibrados.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
};
