import { motion } from 'framer-motion';
import { ShieldCheck, Sun, Wifi, Cpu, Wrench } from 'lucide-react';
import { ContactSection } from '../../components/ContactSection/ContactSection';

export const Services = () => {
    const services = [
        { icon: ShieldCheck, tag: "OP.SEC", title: 'Segurança Eletrônica (CFTV)', desc: 'Projetos de CFTV IP de alta definição, controle de acesso corporativo e alarmes inteligentes.' },
        { icon: Sun, tag: "OP.PWR", title: 'Energia Solar', desc: 'Sistemas fotovoltaicos dimensionados para máxima eficiência e redução severa de custos.' },
        { icon: Wifi, tag: "OP.NET", title: 'Infraestrutura de Redes', desc: 'Cabeamento estruturado, fusão de fibra óptica e implementação de redes Wi-Fi de alta densidade.' },
        { icon: Cpu, tag: "OP.IOT", title: 'Automação Predial', desc: 'Integração de dispositivos para controlo centralizado de iluminação e rotinas industriais.' },
        { icon: Wrench, tag: "OP.MNT", title: 'Manutenção Preventiva', desc: 'Contratos de suporte técnico especializado garantindo SLA de alto rigor.' }
    ];

    return (
        <div className="w-full flex flex-col pt-10 bg-white relative">
            {/* Grade de fundo igual ao Sobre Nós */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }} />
            
            <section className="py-24 relative z-10 text-center px-4 border-b border-gray-100">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="max-w-4xl mx-auto">
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(47,0,105,0.05)', border: '1px solid rgba(47,0,105,0.2)', color: '#2F0069', padding: '0.5rem 1.25rem', borderRadius: '2rem', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2rem' }}>
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#2F0069', borderRadius: '50%' }} /> Operações Ativas
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight leading-tight">Soluções tecnológicas <br/>para o <span className="text-[#FC4C04]">seu futuro</span></h1>
                    <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">Projetos de engenharia desenhados para extrair a máxima performance da sua infraestrutura.</p>
                </motion.div>
            </section>

            <section className="py-20 bg-gray-50 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-[#FC4C04] hover:shadow-2xl transition-all duration-500 group"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-14 h-14 bg-gray-50 text-gray-800 rounded-md border border-gray-100 flex items-center justify-center group-hover:bg-[#FC4C04] group-hover:text-white group-hover:border-[#FC4C04] transition-all duration-500">
                                        <service.icon size={26} strokeWidth={1.5} />
                                    </div>
                                    <span className="font-mono text-xs font-bold text-gray-400 group-hover:text-[#FC4C04] transition-colors">{service.tag}</span>
                                </div>
                                <h3 className="text-xl font-extrabold text-gray-900 mb-3 tracking-tight">{service.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="relative z-10"><ContactSection /></div>
        </div>
    );
};