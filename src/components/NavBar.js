import React from 'react';

import logo from '../logo.png';
import { HeaderDiv } from '../styles/AppStyles';

function NavBar() {
   return (
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
   );
}

export default NavBar;
