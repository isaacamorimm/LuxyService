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
                            <div className={styles.badgeIcon} /> Quem Somos
                        </div>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <h2 className={styles.title}>Eficiência e <br />Integração <span className={styles.highlight}>Total.</span></h2>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <p className={styles.description}>
                            Na <strong>Luxy Service</strong>, acreditamos que a verdadeira eficiência está na integração. Por isso, reunimos múltiplas especialidades sob uma única gestão — garantindo organização, economia e resultados superiores em cada projeto.
                        </p>
                    </Reveal>

                    <Reveal delay={0.5}>
                        <p className={styles.description}>
                            Nossa missão é oferecer soluções integradas e sustentáveis em energia, manutenção e facilities, com excelência técnica, inovação e compromisso com a eficiência operacional dos nossos clientes.
                        </p>
                    </Reveal>

                    <Reveal delay={0.6}>
                        <div className={styles.statsGrid}>
                            <div>
                                <span className={styles.statNumber}>100%</span>
                                <span className={styles.statText}>Integração em Facilities</span>
                            </div>
                            <div>
                                <span className={styles.statNumber}>+Agilidade</span>
                                <span className={styles.statText}>Suporte Especializado</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};