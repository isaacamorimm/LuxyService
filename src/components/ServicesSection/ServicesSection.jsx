import { Reveal } from '../Reveal/Reveal';
import { ShieldCheck, Building2, Zap, Factory } from 'lucide-react';
import styles from './ServicesSection.module.css';

export const ServicesSection = () => {
    return (
        <section id="servicos" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Reveal width="100%">
                        <div style={{ display: 'flex', justifyContent: 'center' }}><span className={styles.badge}>Nossas Soluções</span></div>
                    </Reveal>
                    <Reveal delay={0.3} width="100%">
                        <h2 className={styles.title}>Tecnologia integrada para resultados reais</h2>
                    </Reveal>
                </div>

                <div className={styles.grid}>
                    <Reveal delay={0.4} width="100%" height="100%">
                        <div className={styles.card}>
                            <div className={styles.iconWrapper}><Building2 size={28} /></div>
                            <h3 className={styles.cardTitle}>Manutenção Predial e Facilities</h3>
                            <p className={styles.cardDesc}>Integramos diferentes serviços prediais: elétrica, refrigeração, limpeza e jardinagem com excelência térmica.</p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.5} width="100%" height="100%">
                        <div className={styles.card}>
                            <div className={styles.iconWrapper}><Zap size={28} /></div>
                            <h3 className={styles.cardTitle}>Instalação Elétrica e HVAC</h3>
                            <p className={styles.cardDesc}>Manutenção e instalação elétrica de baixa e média tensão, além de climatização e Ar-Condicionado.</p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.6} width="100%" height="100%">
                        <div className={styles.card}>
                            <div className={styles.iconWrapper}><ShieldCheck size={28} /></div>
                            <h3 className={styles.cardTitle}>Segurança e Controle de Acesso</h3>
                            <p className={styles.cardDesc}>Vigilância, projetos de CFTV IP, controle de acesso para portarias e recepções com máxima proteção.</p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.7} width="100%" height="100%">
                        <div className={styles.card}>
                            <div className={styles.iconWrapper}><Factory size={28} /></div>
                            <h3 className={styles.cardTitle}>Sistemas Prediais e ETA/ETE</h3>
                            <p className={styles.cardDesc}>Operação e manutenção especializada de Estações de Tratamento de Água e Efluentes.</p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};