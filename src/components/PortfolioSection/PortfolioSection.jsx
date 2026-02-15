import styles from './PortfolioSection.module.css';

export const PortfolioSection = () => {
    return (
        <section id="portfolio" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Cases de Sucesso</span>
                    <h2 className={styles.title}>Nosso Portfólio</h2>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.imageBox}>
                            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80" alt="Data Center" className={styles.image} />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.tag}>Redes & Infra</span>
                            <h3 className={styles.projectTitle}>Modernização de Data Center</h3>
                            <p className={styles.projectDesc}>Reestruturação completa do cabeamento óptico e instalação de racks inteligentes para multinacional do setor logístico.</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imageBox}>
                            <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80" alt="Painel Solar" className={styles.image} />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.tag}>Energia Solar</span>
                            <h3 className={styles.projectTitle}>Fazenda Solar Agro</h3>
                            <p className={styles.projectDesc}>Implementação de usina fotovoltaica de 500kWp, reduzindo em 90% a conta de energia do agronegócio.</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.imageBox}>
                            <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80" alt="Câmeras CFTV" className={styles.image} />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.tag}>CFTV</span>
                            <h3 className={styles.projectTitle}>Monitoramento Urbano</h3>
                            <p className={styles.projectDesc}>Instalação de 120 câmeras IP com inteligência analítica para condomínio de alto padrão em São Paulo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};