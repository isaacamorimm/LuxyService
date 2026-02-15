import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone } from 'lucide-react';
import styles from './footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Coluna 1 */}
                    <div>
                        <h4 className={styles.columnTitle}>Luxy Service</h4>
                        <ul className={styles.list}>
                            <li><a href="#" className={styles.link}>Institucional</a></li>
                            <li><a href="#" className={styles.link}>Trabalhe Conosco</a></li>
                        </ul>
                    </div>

                    {/* Coluna 2 */}
                    <div>
                        <h4 className={styles.columnTitle}>Suporte</h4>
                        <ul className={styles.list}>
                            <li><a href="#" className={styles.link}>Assistência Técnica</a></li>
                            <li><a href="#" className={styles.link}>Política de Privacidade</a></li>
                        </ul>
                    </div>

                    {/* Coluna 3 */}
                    <div>
                        <h4 className={styles.columnTitle}>Contato</h4>
                        <ul className={styles.list}>
                            <li className={styles.contactItem}><Phone size={16} /> 0800 704 2767</li>
                            <li className={styles.contactItem}><Mail size={16} /> contato@luxyservice.com.br</li>
                        </ul>
                        <div className={styles.socialSection}>
                            <h5 className={styles.socialTitle}>Redes Sociais</h5>
                            <div className={styles.socialIcons}>
                                <a href="#" className={styles.icon}><Instagram size={20} /></a>
                                <a href="#" className={styles.icon}><Facebook size={20} /></a>
                                <a href="#" className={styles.icon}><Youtube size={20} /></a>
                                <a href="#" className={styles.icon}><Linkedin size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} Luxy Service. Cuidando da sua energia. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};