import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const isHome = location.pathname === '/';

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={styles.header}
        >
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <img src="/luxylogo.png" alt="Luxy Service Logo" className={styles.logoImage} />
                </Link>

                <nav className={styles.desktopNav}>
                    <Link to="/" className={styles.navLink}>Início</Link>
                    <Link to="/sobre" className={styles.navLink}>Sobre Nós</Link>
                    {isHome ? (
                        <a href="#portfolio" className={styles.navLink}>Portfólio</a>
                    ) : (
                        <Link to="/#portfolio" className={styles.navLink}>Portfólio</Link>
                    )}
                    <Link to="/servicos" className={styles.navLink}>Serviços</Link>
                    <a href="#contact" className={styles.ctaButton}>Fale Conosco</a>
                </nav>

                <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Abrir menu">
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={styles.mobileMenu}
                    >
                        <Link to="/" className={styles.mobileNavLink} onClick={toggleMenu}>Início</Link>
                        <Link to="/sobre" className={styles.mobileNavLink} onClick={toggleMenu}>Sobre Nós</Link>
                        {isHome ? (
                            <a href="#portfolio" className={styles.mobileNavLink} onClick={toggleMenu}>Portfólio</a>
                        ) : (
                            <Link to="/#portfolio" className={styles.mobileNavLink} onClick={toggleMenu}>Portfólio</Link>
                        )}
                        <Link to="/servicos" className={styles.mobileNavLink} onClick={toggleMenu}>Serviços</Link>
                        <a href="#contact" className={styles.ctaButton} style={{ textAlign: 'center', marginTop: '0.5rem' }} onClick={toggleMenu}>Fale Conosco</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};