import React from 'react';
import Logo from './media/main-logo.png';
import './Header.scss';

function Header() {
  return (
    <header className="section header__section">
      <div className="container header__container">
        <div className="grid header__grid">
          <div className="grid-item header__grid-item">
            <a href="#" className="link header__logo-link">
              <img src={Logo} className="header__logo"></img>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
