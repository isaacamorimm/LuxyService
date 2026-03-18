import { motion } from 'framer-motion';
import { Reveal } from '../Reveal/Reveal';
import styles from './ClientsSection.module.css';

const clients = [
    { name: 'Giro Trade', logo: '/assets/clients/giro-trade.png' },
    { name: 'Blanc Hospital', logo: '/assets/clients/blanc-hospital.png' },
    { name: 'CBRE', logo: '/assets/clients/cbre.png' },
    { name: 'Negreiros Supermercados', logo: '/assets/clients/negreiros.png' },
    { name: 'A.C.Camargo', logo: '/assets/clients/ac-camargo.png' },
    { name: 'Puma', logo: '/assets/clients/puma.png' }
];

export const ClientsSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Reveal>
                    <div className={styles.header}>
                        <div className={styles.badge}>
                            <div className={styles.badgeIcon} /> Nossos Clientes
                        </div>
                        <h2 className={styles.title}>
                            Empresas que confiam em nós
                        </h2>
                    </div>
                </Reveal>

                <div className={styles.marqueeContainer}>
                    <div className={styles.marqueeContent}>
                        {/* Lista duplicada para scroll infinito */}
                        {[...clients, ...clients].map((client, index) => (
                            <div key={index} className={styles.clientItem}>
                                <img 
                                    src={client.logo} 
                                    alt={`Logo ${client.name}`} 
                                    className={styles.clientLogo}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className={styles.clientFallback}>
                                    {client.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
