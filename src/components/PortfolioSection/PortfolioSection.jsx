import { motion } from 'framer-motion';
import styles from './PortfolioSection.module.css';

export const PortfolioSection = () => {
    return (
        <section id="portfolio" className={styles.section}>
            <div className={styles.container}>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className={styles.header}
                >
                    <div className={styles.badge}>
                        <div className={styles.badgeIcon} /> Cases de Sucesso
                    </div>
                    <h2 className={styles.title}>Portfólio de Engenharia</h2>
                </motion.div>

                <div className={styles.grid}>
                    {[
                        { 
                            img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=500", 
                            tag: "SYS.NETWORKS", 
                            title: "Modernização de Data Center", 
                            desc: "Reestruturação completa de cabeamento óptico e racks inteligentes para operação logística 24/7." 
                        },
                        { 
                            img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=500", 
                            tag: "SYS.SOLAR", 
                            title: "Fazenda Solar Agro", 
                            desc: "Usina fotovoltaica de 500kWp com painéis de alta eficiência reduzindo o custo energético em 90%." 
                        },
                        { 
                            img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=500", 
                            tag: "SYS.SECURITY", 
                            title: "Monitoramento Analítico", 
                            desc: "Rede CFTV IP com 120 câmeras e inteligência de reconhecimento facial para condomínio empresarial." 
                        }
                    ].map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 50 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true, margin: "-50px" }} 
                            transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className={styles.card}
                        >
                            <div className={styles.imageBox}>
                                {/* Imagem com lazy load */}
                                <img src={item.img} alt={item.title} className={styles.image} loading="lazy" />
                            </div>
                            <div className={styles.content}>
                                <span className={styles.tag}>{item.tag}</span>
                                <h3 className={styles.projectTitle}>{item.title}</h3>
                                <p className={styles.projectDesc}>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};