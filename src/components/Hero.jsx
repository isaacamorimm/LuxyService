import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        Excelência em Engenharia & Tecnologia
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight"
                    >
                        Soluções completas em <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Segurança</span> e <span className="text-secondary">Energia</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Transformamos ambientes com tecnologia de ponta. Do projeto à execução, garantimos eficiência, segurança e sustentabilidade para sua empresa ou residência.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-secondary/25 flex items-center justify-center gap-2 group">
                            Conheça Nossos Serviços
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="w-full sm:w-auto bg-white border border-gray-200 hover:border-primary/50 text-gray-700 hover:text-primary px-8 py-4 rounded-full font-bold text-lg transition-all shadow-sm hover:shadow-md">
                            Ver Projetos Recentes
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
