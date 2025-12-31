import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', icon: 'fa-solid fa-house-chimney', label: 'Home' },
    { to: '/countdown', icon: 'fa-solid fa-stopwatch-20', label: 'Countdown' },
    { to: '/games', icon: 'fa-solid fa-gamepad', label: 'Games' },
    { to: '/messages', icon: 'fa-solid fa-envelope', label: 'Messages' },
    { to: '/memories', icon: 'fa-solid fa-brain', label: 'Memories' },
  ];

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">Happy New Year maryomty</Link>

        <div className={`nav__menu ${menuOpen ? 'show-menu' : ''}`}>
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link 
                  to={link.to} 
                  className="nav__link"
                  onClick={() => setMenuOpen(false)}
                >
                  <i className={link.icon}></i>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav__close" onClick={() => setMenuOpen(false)}>
            <i className="ri-close-large-line"></i>
          </div>
        </div>

        <div className="nav__toggle" onClick={() => setMenuOpen(true)}>
          <i className="ri-apps-2-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
