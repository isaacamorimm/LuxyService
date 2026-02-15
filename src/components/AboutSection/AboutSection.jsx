import { motion } from 'framer-motion';
import styles from './AboutSection.module.css';

export const AboutSection = () => {
    return (
        <section id="sobre" className={styles.section}>
            <div className={styles.container}>
                <motion.div 
                    initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
                    className={styles.imageGrid}
                >
                    <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80" alt="Equipe de Engenharia" className={styles.img1} />
                    <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80" alt="Instalação Tecnológica" className={styles.img2} />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
                >
                    <span className={styles.badge}>Quem Somos</span>
                    <h2 className={styles.title}>De especialistas em Energia a uma Integradora Completa</h2>
                    <p className={styles.description}>
                        Nascemos como <span className={styles.highlight}>Luxy Solar</span>, dedicados a transformar a forma como as empresas consumiam energia. Com a evolução do mercado e as exigências dos nossos clientes, expandimos a nossa atuação.
                    </p>
                    <p className={styles.description}>
                        Hoje, a <strong>Luxy Service</strong> é sinónimo de infraestrutura robusta. Unimos o melhor da Segurança Eletrónica (CFTV), Automação IoT e Redes Corporativas, garantindo que a sua empresa opere com eficiência, segurança e inovação constante.
                    </p>

                    <div className={styles.statsGrid}>
                        <div>
                            <span className={styles.statNumber}>+500</span>
                            <span className={styles.statText}>Projetos Entregues</span>
                        </div>
                        <div>
                            <span className={styles.statNumber}>100%</span>
                            <span className={styles.statText}>Compromisso com Qualidade</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};