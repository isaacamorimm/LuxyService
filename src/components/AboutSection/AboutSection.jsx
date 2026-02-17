import { motion } from 'framer-motion';
import { Reveal } from '../Reveal';
import styles from './AboutSection.module.css';

export const AboutSection = () => {
    return (
        <section id="sobre" className={styles.section}>
            <div className={styles.gridOverlayLight} />
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className={styles.imageGrid}
                >
                    {/* Imagens otimizadas com &w=600 e lazy load */}
                    <img
                        src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600"
                        alt="Equipa de Engenharia"
                        className={styles.img1}
                        loading="lazy"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600"
                        alt="Instalação Tecnológica"
                        className={styles.img2}
                        loading="lazy"
                    />
                </motion.div>

                <div>
                    <Reveal delay={0.2}>
                        <div className={styles.badge}>
                            <div className={styles.badgeIcon} /> Nossa História
                        </div>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <h2 className={styles.title}>Evolução Constante. <br />Integração <span className={styles.highlight}>Total.</span></h2>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <p className={styles.description}>
                            Nascemos como Luxy Solar, dedicados a transformar a matriz energética de empresas. Com a evolução do mercado, a nossa engenharia acompanhou as necessidades corporativas.
                        </p>
                    </Reveal>

                    <Reveal delay={0.5}>
                        <p className={styles.description}>
                            Hoje somos a <strong>Luxy Service</strong>. Uma integradora de tecnologia de ponta focada em CFTV, Redes e Automação IoT, garantindo que o seu negócio opere na sua máxima capacidade técnica.
                        </p>
                    </Reveal>

                    <Reveal delay={0.6}>
                        <div className={styles.statsGrid}>
                            <div>
                                <span className={styles.statNumber}>+500</span>
                                <span className={styles.statText}>Projetos Integrados</span>
                            </div>
                            <div>
                                <span className={styles.statNumber}>100%</span>
                                <span className={styles.statText}>Up-time Garantido</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};