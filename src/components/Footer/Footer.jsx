import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.gridOverlay} />

            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className={styles.grid}
                >
                    {/* Coluna 1 - Marca */}
                    <div className={styles.brand}>
                        <a href="#inicio" className={styles.logo}>
                            <img src="/luxylogo.png" alt="Luxy Service Logo" className={styles.logoImage} />
                        </a>
                        <p className={styles.brandDesc}>
                            Engenharia de alta performance para infraestruturas corporativas. Segurança, energia e redes em total sincronia.
                        </p>
                    </div>

                    {/* Coluna 2 - Navegação */}
                    <div>
                        <h4 className={styles.columnTitle}>A Empresa</h4>
                        <ul className={styles.list}>
                            <li><a href="/sobre" className={styles.link}>Sobre Nós</a></li>
                            <li><a href="/servicos" className={styles.link}>Nossas Soluções</a></li>
                        </ul>
                    </div>

                    {/* Coluna 3 - Contatos e Redes */}
                    <div>
                        <h4 className={styles.columnTitle}>Central de Operações</h4>
                        <ul className={styles.list}>
                            <li className={styles.contactItem}>
                                <MapPin size={18} className="shrink-0" />   
                                <span>Rua Da Rancheira 170 - Jardim Santo Antonio, São Paulo - SP, 08032-220</span>
                            </li>
                            <li className={styles.contactItem}>
                                <Phone size={18} className="shrink-0" /> 
                                <span>(11) 9 9280-1900</span>
                            </li>
                            <li className={styles.contactItem}>
                                <Mail size={18} className="shrink-0" /> 
                                <span>comercial@luxysolar.com.br</span>
                            </li>
                        </ul>

                        <div className={styles.socialSection}>
                            <div className={styles.socialIcons}>
                                {/* Substitua o "#" pelos links reais do Instagram, LinkedIn, etc. */}
                                <a href="https://instagram.com/luxy_solar" target="_blank" rel="noopener noreferrer" className={styles.iconWrapper}><Instagram size={18} /></a>
                                <a href="https://www.linkedin.com/in/luxy-solar-energia-sustent%C3%A1vel-ltda-4a05912bb/" target="_blank" rel="noopener noreferrer"  className={styles.iconWrapper}><Linkedin size={18} /></a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Direitos de Autor e CNPJ */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={styles.bottom}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <p>© {new Date().getFullYear()} Luxy Service. Todos os direitos reservados. | CNPJ: 59.890.956/0001-59</p>
                        <p>Desenvolvido para alta performance.</p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};