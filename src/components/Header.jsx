import React, { useState } from 'react';
import { Menu, Search, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header" style={{ borderBottom: '1px solid #eee', backgroundColor: 'white' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1rem' }}>

        {/* Logo */}
        <Link to="/" style={{ fontSize: '1.75rem', fontWeight: '800', color: '#2F0069', textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          LUXY <span style={{ fontSize: '0.8rem', letterSpacing: '2px', color: '#FC4C04', fontWeight: '500' }}>SERVICE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'none', md: { display: 'flex' } }}>
          <ul style={{ display: 'flex', gap: '2rem', fontWeight: '500', color: '#333' }}>
            <li><a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>Início</a></li>
            <li><a href="#sobre">Quem Somos</a></li>
            <li><a href="#servicos">Serviços <ChevronDown size={14} /></a></li>
            <li><a href="#contact">F.A.Q / Contato</a></li>
          </ul>
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="search-bar" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f4f4f4', padding: '0.5rem 1rem', borderRadius: '20px' }}>
            <input
              type="text"
              placeholder="O que você procura?"
              style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.9rem', width: '150px' }}
            />
            <Search size={18} color="#666" />
          </div>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ display: 'block', md: { display: 'none' } }}>
            {isMenuOpen ? <X size={24} color="#2F0069" /> : <Menu size={24} color="#2F0069" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          padding: '1rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          zIndex: 100
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li><a href="#inicio" style={{ fontWeight: '600', color: '#2F0069' }}>Início</a></li>
            <li><a href="#sobre">Quem Somos</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contact">F.A.Q / Contato</a></li>
          </ul>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .search-bar { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
