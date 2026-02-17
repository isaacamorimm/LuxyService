import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#2F0069', color: '#fff', paddingTop: '4rem', paddingBottom: '2rem', fontSize: '0.9rem' }}>
            <div className="container">
                <div className="footer-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    {/* Column 1 */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#FC4C04' }}>Luxy Service</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#e0e0e0' }}>
                            <li><a href="#" className="footer-link">Institucional</a></li>
                            <li><a href="#" className="footer-link">Relação com Investidores</a></li>
                            <li><a href="#" className="footer-link">Trabalhe Conosco</a></li>
                            <li><a href="#" className="footer-link">Sustentabilidade</a></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#FC4C04' }}>Suporte</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#e0e0e0' }}>
                            <li><a href="#" className="footer-link">Assistência Técnica</a></li>
                            <li><a href="#" className="footer-link">Central de Downloads</a></li>
                            <li><a href="#" className="footer-link">Fórum Luxy</a></li>
                            <li><a href="#" className="footer-link">Política de Privacidade</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#FC4C04' }}>Contato</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#e0e0e0' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={16} /> 0800 704 2767</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={16} /> contato@luxyservice.com.br</li>
                        </ul>
                        <div style={{ marginTop: '1.5rem' }}>
                            <h5 style={{ fontSize: '0.9rem', marginBottom: '0.75rem', color: '#fff' }}>Redes Sociais</h5>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href="#" className="social-icon"><Instagram size={20} /></a>
                                <a href="#" className="social-icon"><Facebook size={20} /></a>
                                <a href="#" className="social-icon"><Youtube size={20} /></a>
                                <a href="#" className="social-icon"><Linkedin size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #444', paddingTop: '2rem', textAlign: 'center', color: '#aaa', fontSize: '0.8rem' }}>
                    <p>© {new Date().getFullYear()} Luxy Service. Cuidando da sua energia. Todos os direitos reservados.</p>
                </div>
            </div>

            <style>{`
        .footer-link:hover { color: #FC4C04 !important; }
        .social-icon:hover { color: #FC4C04; }
      `}</style>
        </footer>
    );
};

export default Footer;
