import React, { useState, useEffect } from 'react';

import useInterval from '../../hooks/useInterval';
import NavBar from './NavBar';
import { AppHeader } from './Header.styled';

let myName = Array.from("Josemaria Nriagu");

function Header({ theme }) {
  const [name, setName] = useState("");

  // define icon src variations
  const srcMouse = theme === 'light' ? "/mouse-black.png" : "/mouse-white.png";
  const srcScroll = theme === 'light' ? "/chevron-upwards-black.png" : "/chevron-upwards-white.png"

  useInterval(() => {
    const el = myName.length === 0 ? (myName = Array.from("Josemaria Nriagu"), myName.shift()) : myName.shift();
    name === "Josemaria Nriagu" ? setName(el) : setName(name + el);
  }, 500);

  useEffect(() => {
    window.addEventListener('scroll', () => scroll());

    // Define scroll behaviour
    const scroll = () => {
      const scrollButton = document.querySelector('#scroll');
      // condition to check for scrolled height
      if (window.scrollY > 600 || document.documentElement.scrollY > 600) {
        scrollButton.style.display = 'block';
      } else {
        scrollButton.style.display = 'none';
      }
    }
  }, [])

  return (
    <AppHeader id="home">
      <NavBar />
      <div data-testid="nameplate">
        <h1>{name}</h1>
        <h3>Team-Oriented Software Engineer</h3>
        <a href="#about">
          <img id="mouse" src={srcMouse} alt="mouse scroll" />
        </a>
        <a href="#home">
          <img id="scroll" src={srcScroll} alt="scroll up" />
        </a>
      </div>
    </AppHeader>
  );
}

export default Header;
