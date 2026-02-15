import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './hero.module.css';

export const Hero = () => {
    return (
        <section id="inicio" className={styles.hero}>
            <div className={styles.blobPrimary} />
            
            <div className={styles.container}>
                {/* Textos Animados */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className={styles.badge}>Excelência em Engenharia</span>
                    <h1 className={styles.title}>
                        Infraestrutura inteligente para o <span className={styles.titleHighlight}>seu negócio.</span>
                    </h1>
                    <p className={styles.description}>
                        A Luxy Service projeta e executa soluções de alto desempenho em Segurança Eletrônica, Energia Solar, Automação e Redes Corporativas.
                    </p>
                    
                    <div className={styles.buttonGroup}>
                        <a href="#contact" className={styles.btnPrimary}>
                            Solicitar Orçamento <ArrowRight size={20} />
                        </a>
                        <a href="#portfolio" className={styles.btnSecondary}>
                            Ver Portfólio
                        </a>
                    </div>
                </motion.div>

                {/* Imagem Animada */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={styles.imageWrapper}
                >
                    <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                        alt="Escritório Corporativo Luxy Service" 
                        className={styles.image}
                    />
                    <div className={styles.imageOverlay}></div>
                </motion.div>
            </div>
        </section>
    );
};