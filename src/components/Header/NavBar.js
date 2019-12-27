import React from 'react';

import logo from '../../logo.png';
import { HeaderDiv, MobileNav } from './NavBar.styled';

function NavBar() {
  return (
    <>
      <HeaderDiv>
        <div>
          <a href="/">
            <img src={logo} alt="Josemaria Nriagu" />
          </a>
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#stack">Stack</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </HeaderDiv>
      <MobileNav>
        <a href="#home">
          <i className="fas fa-home fa-1x"></i>
        </a>
        <a href="#about">
          <i className="fas fa-address-book fa-1x"></i>
        </a>
        <a href="#stack">
          <i className="fas fa-database fa-1x"></i>
        </a>
        <a href="#projects">
          <i className="fas fa-code fa-1x"></i>
        </a>
        <a href="#contact">
          <i className="fas fa-phone fa-1x"></i>
        </a>
      </MobileNav>
    </>
  );
}

export default NavBar;
