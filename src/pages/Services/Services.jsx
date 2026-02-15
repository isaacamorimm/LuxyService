import { motion } from 'framer-motion';
import { ShieldCheck, Sun, Wifi, Cpu, Wrench } from 'lucide-react';
import { ContactSection } from '../../components/ContactSection/ContactSection';

export const Services = () => {
    const services = [
        { icon: ShieldCheck, title: 'Segurança Eletrônica (CFTV)', desc: 'Projetos de CFTV IP de alta definição, controle de acesso corporativo e alarmes inteligentes para proteção 24h.' },
        { icon: Sun, title: 'Energia Solar', desc: 'Sistemas fotovoltaicos dimensionados para máxima eficiência, reduzindo custos operacionais e promovendo a sustentabilidade.' },
        { icon: Wifi, title: 'Infraestrutura de Redes', desc: 'Cabeamento estruturado, fusão de fibra óptica e implementação de redes Wi-Fi de alta densidade e estabilidade.' },
        { icon: Cpu, title: 'Automação Predial', desc: 'Integração de dispositivos inteligentes para controlo centralizado de iluminação, climatização e rotinas operacionais.' },
        { icon: Wrench, title: 'Manutenção Preventiva', desc: 'Contratos de suporte técnico especializado para garantir a longevidade e o funcionamento contínuo dos seus equipamentos.' }
    ];

    return (
        <div className="w-full flex flex-col pt-10">
            {/* Header da Página de Serviços */}
            <section className="py-20 bg-gray-50 text-center px-4">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
                    <span style={{ display: 'inline-block', backgroundColor: 'rgba(252, 76, 4, 0.1)', color: '#FC4C04', padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1.5rem' }}>O que fazemos</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Soluções tecnológicas para o futuro do seu negócio</h1>
                    <p className="text-lg text-gray-600">Projetos personalizados, do planeamento à execução, garantindo a melhor performance para a sua infraestrutura.</p>
                </motion.div>
            </section>

            {/* Grid de Serviços */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-[#2F0069] hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-[#2F0069]/10 text-[#2F0069] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FC4C04] group-hover:text-white transition-colors">
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reaproveitamos o Contato no final da página de serviços */}
            <ContactSection />
        </div>
    );
};