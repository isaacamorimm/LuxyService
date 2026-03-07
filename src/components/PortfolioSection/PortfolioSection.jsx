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
                            img: "/portfolio/paineis-eletricos-industriais.jpg",
                            tag: "SYS.POWER",
                            title: "Adequação de Cabines Primárias",
                            desc: "Retrofit completo de painéis de distribuição e adequação normativa NR10 para parque fabril contínuo."
                        },
                        {
                            img: "/portfolio/climatizacao-corporativa.jpg",
                            tag: "SYS.HVAC",
                            title: "Sistemas VRF de Alta Eficiência",
                            desc: "Implantação e gestão total de PMOC térmico em torre corporativa, reduzindo consumo energético em 35%."
                        },
                        {
                            img: "/portfolio/central-de-monitoramento-cftv.jpg",
                            tag: "SYS.SECURITY",
                            title: "NOC e Monitoramento Analítico",
                            desc: "Rede CFTV IP com inteligência perimetral e reconhecimento facial integrado ao controle de acesso dinâmico."
                        },
                        {
                            img: "/portfolio/qualificacao-areas-limpas.jpg",
                            tag: "SYS.FACILITIES",
                            title: "Qualificação de Áreas Limpas",
                            desc: "Manutenção higiênico-sanitária e gestão metrológica rigorosa para laboratórios classe ISO mundial."
                        },
                        {
                            img: "/portfolio/infraestrutura-predial-corporativa.jpg",
                            tag: "SYS.INFRA",
                            title: "Retrofit de Infraestrutura",
                            desc: "Master plan de modernização, envolvendo sistemas essenciais, elétricos e automação predial integrada."
                        },
                        {
                            img: "/portfolio/gestao-facilities-luxy.jpg",
                            tag: "SYS.OPS",
                            title: "Gestão Integrada de Facilities",
                            desc: "Contrato full-service para condomínio empresarial, garantindo 100% de compliance operacional ininterrupto."
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