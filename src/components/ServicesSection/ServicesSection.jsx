import { ShieldCheck, Sun, Wifi, Cpu } from 'lucide-react';
import styles from './services.module.css';

export const ServicesSection = () => {
    return (
        <section id="servicos" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Nossas Soluções</span>
                    <h2 className={styles.title}>Tecnologia integrada para resultados reais</h2>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}><ShieldCheck size={28} /></div>
                        <h3 className={styles.cardTitle}>Segurança Eletrônica</h3>
                        <p className={styles.cardDesc}>Projetos de CFTV IP de alta definição, controle de acesso e alarmes inteligentes para máxima proteção corporativa.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}><Sun size={28} /></div>
                        <h3 className={styles.cardTitle}>Energia Solar</h3>
                        <p className={styles.cardDesc}>Sistemas fotovoltaicos dimensionados para redução de custos e sustentabilidade energética em larga escala.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}><Wifi size={28} /></div>
                        <h3 className={styles.cardTitle}>Infraestrutura de Redes</h3>
                        <p className={styles.cardDesc}>Cabeamento estruturado, fibra óptica e redes Wi-Fi de alta densidade para garantir estabilidade e velocidade.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}><Cpu size={28} /></div>
                        <h3 className={styles.cardTitle}>Automação IoT</h3>
                        <p className={styles.cardDesc}>Integração de dispositivos inteligentes para controle de iluminação, climatização e processos industriais.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};