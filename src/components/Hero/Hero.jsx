import { ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '../Reveal';
import styles from './Hero.module.css';



export const Hero = () => {
    return (
        <section id="inicio" className={styles.hero}>
            <div className={styles.gridOverlay} />
            <div className={styles.glowPurple} />
            <div className={styles.glowOrange} />

            <div className={styles.container}>
                <div style={{ maxWidth: '600px' }}>
                    <Reveal>
                        <div className={styles.badge}>
                            <div className={styles.badgeIcon} />
                            Sistema Ativo
                        </div>
                    </Reveal>

                    <Reveal delay={0.35}>
                        <h1 className={styles.title}>
                            Engenharia de <br />
                            <span className={styles.titleHighlight}>Alta Performance.</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.45}>
                        <p className={styles.description}>
                            A Luxy Service desenvolve infraestrutura inteligente. De Segurança IP a Redes Corporativas e Energia Solar, nós desenhamos o futuro da sua operação.
                        </p>
                    </Reveal>

                    <Reveal delay={0.55}>
                        <div className={styles.buttonGroup}>
                            <a href="#contact" className={styles.btnPrimary}>
                                Iniciar Projeto <ArrowRight size={20} />
                            </a>
                            <a href="#portfolio" className={styles.btnSecondary}>
                                Ver Portfólio
                            </a>
                        </div>
                    </Reveal>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={styles.techPanel}
                >
                    <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-3">
                        <Terminal size={18} className="text-[#FC4C04]" />
                        <span className={styles.codeLine} style={{ marginBottom: 0 }}>luxy-core-systems.exe</span>
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