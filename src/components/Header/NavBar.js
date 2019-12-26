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
        <a href="#home" onClick={Window.reload}>
          <i class="fas fa-home fa-1x"></i>
        </a>
        <a href="#about">
          <i class="fas fa-address-book fa-1x"></i>
        </a>
        <a href="#stack">
          <i class="fas fa-database fa-1x"></i>
        </a>
        <a href="#projects">
          <i class="fas fa-code fa-1x"></i>
        </a>
        <a href="#contact">
          <i class="fas fa-phone fa-1x"></i>
        </a>
      </MobileNav>
    </>
  );
}

export default NavBar;
