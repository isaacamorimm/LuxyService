import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './footer.module.css';

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
                            <Zap size={24} className={`${styles.logoHighlight} ${styles.iconTilt}`} strokeWidth={2.5} />
                            Luxy<span className={styles.logoHighlight}>Service</span>
                        </a>
                        <p className={styles.brandDesc}>
                            Engenharia de alta performance para infraestruturas corporativas. Segurança, energia e redes em total sincronia.
                        </p>
                    </div>

                    {/* Coluna 2 - Navegação */}
                    <div>
                        <h4 className={styles.columnTitle}>A Empresa</h4>
                        <ul className={styles.list}>
                            <li><a href="#sobre" className={styles.link}>Sobre Nós</a></li>
                            <li><a href="#portfolio" className={styles.link}>Portfólio de Engenharia</a></li>
                            <li><a href="/servicos" className={styles.link}>Nossas Soluções</a></li>
                        </ul>
                    </div>

                    {/* Coluna 3 - Contactos e Redes */}
                    <div>
                        <h4 className={styles.columnTitle}>Central de Operações</h4>
                        <ul className={styles.list}>
                            <li className={styles.contactItem}><Phone size={18} /> 0800 704 2767</li>
                            <li className={styles.contactItem}><Mail size={18} /> contacto@luxyservice.com.br</li>
                        </ul>

                        <div className={styles.socialSection}>
                            <div className={styles.socialIcons}>
                                <a href="#" className={styles.iconWrapper}><Instagram size={18} /></a>
                                <a href="#" className={styles.iconWrapper}><Linkedin size={18} /></a>
                                <a href="#" className={styles.iconWrapper}><Youtube size={18} /></a>
                                <a href="#" className={styles.iconWrapper}><Facebook size={18} /></a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Direitos de Autor */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={styles.bottom}
                >
                    <p>© {new Date().getFullYear()} Luxy Service. Todos os direitos reservados.</p>
                    <p>Desenvolvido para alta performance.</p>
                </motion.div>
            </div>
        </footer>
    );
};