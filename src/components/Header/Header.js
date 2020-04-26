import React, { useEffect, useRef } from 'react';

import useTyped from '../../hooks/useTyped';
import NavBar from './NavBar';
import { AppHeader } from './Header.styled';

function Header({ theme }) {
  const captionRef = useRef(null);

  // define icon src variations
  const srcMouse = theme === 'light' ? '/mouse-black.png' : '/mouse-white.png';
  const srcScroll =
    theme === 'light'
      ? '/chevron-upwards-black.png'
      : '/chevron-upwards-white.png';

  // legacy code: not used anymore
  // useInterval(() => {
  //   const el =
  //     myName.length === 0
  //       ? ((myName = Array.from("Josemaria Nriagu")), myName.shift())
  //       : myName.shift();
  //   name === "Josemaria Nriagu" ? setName(el) : setName(name + el);
  // }, 500);

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
    };
  }, []);

  useTyped(captionRef, {
    strings: [
      '<strong>Team-Oriented</strong>',
      'Software Engineer',
      '<strong>Team-Oriented</strong> Software Engineer'
    ],
    typeSpeed: 50,
    backSpeed: 50
  });

  return (
    <AppHeader id="home">
      <NavBar />
      <div data-testid="nameplate">
        <h1>Josemaria Nriagu</h1>
        <div className="typer">
          <span ref={captionRef} />
        </div>
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
