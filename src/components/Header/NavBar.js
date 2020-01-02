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
        <nav data-testid="desktopNav">
          <a href="#about">About</a>
          <a href="#stack">Stack</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </HeaderDiv>
      <MobileNav data-testid="mobileNav">
        <a href="#home">
          <i className="fas fa-home fa-1x"></i> Home
        </a>
        <a href="#about">
          <i className="fas fa-address-book fa-1x"></i> About
        </a>
        <a href="#stack">
          <i className="fas fa-database fa-1x"></i> Stack
        </a>
        <a href="#projects">
          <i className="fas fa-code fa-1x"></i> Projects
        </a>
        <a href="#contact">
          <i className="fas fa-phone fa-1x"></i> Contact
        </a>
      </MobileNav>
    </>
  );
}

export default NavBar;
