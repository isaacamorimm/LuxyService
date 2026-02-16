import { ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './hero.module.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
};

export const Hero = () => {
    return (
        <section id="inicio" className={styles.hero}>
            <div className={styles.gridOverlay} />
            <div className={styles.glowPurple} />
            <div className={styles.glowOrange} />
            
            <div className={styles.container}>
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                    <motion.div variants={itemVariants} className={styles.badge}>
                        <div className={styles.badgeIcon} />
                        Sistema Ativo
                    </motion.div>
                    
                    <motion.h1 variants={itemVariants} className={styles.title}>
                        Engenharia de <br />
                        <span className={styles.titleHighlight}>Alta Performance.</span>
                    </motion.h1>
                    
                    <motion.p variants={itemVariants} className={styles.description}>
                        A Luxy Service desenvolve infraestrutura inteligente. De Segurança IP a Redes Corporativas e Energia Solar, nós desenhamos o futuro da sua operação.
                    </motion.p>
                    
                    <motion.div variants={itemVariants} className={styles.buttonGroup}>
                        <a href="#contact" className={styles.btnPrimary}>
                            Iniciar Projeto <ArrowRight size={20} />
                        </a>
                        <a href="#portfolio" className={styles.btnSecondary}>
                            Ver Portfólio
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={styles.techPanel}
                >
                    <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-3">
                        <Terminal size={18} className="text-[#FC4C04]" />
                        <span className={styles.codeLine} style={{marginBottom: 0}}>luxy-core-systems.exe</span>
                    </div>
                    {/* Imagem otimizada com &w=800 */}
                    <img 
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                        alt="Cyber Infraestrutura" 
                        className={styles.image} 
                    />
                </motion.div>
            </div>
        </section>
    );
};