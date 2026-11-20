import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const sections = portfolioData.nav;

  const handleClick = (item) => {
    setMenuOpen(false);
    const id = item.toLowerCase();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); handleClick('home'); }}>
          AKS
        </a>

        <ul className="nav-links">
          {sections.map(item => {
            const isHome = item === 'Home';
            const isActive = activeSection === item.toLowerCase() || (isHome && (!activeSection || activeSection === 'home'));
            return (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={isActive ? 'active' : ''}
                  onClick={e => { e.preventDefault(); handleClick(item); }}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {sections.map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={e => { e.preventDefault(); handleClick(item); }}>
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
