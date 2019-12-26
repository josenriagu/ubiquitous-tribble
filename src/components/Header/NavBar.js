import React from 'react';

import { HeaderDiv } from './NavBar.styled';

function NavBar() {
  return (
    <HeaderDiv>
      <div>
        <a href="/">
          <img src="/logo.png" alt="Josemaria Nriagu" />
        </a>
      </div>
      <nav>
        <a href="#about">About</a>
        <a href="#stack">Stack</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </HeaderDiv>
  );
}

export default NavBar;
