import React, { useState, useEffect } from 'react';

import useInterval from '../../hooks/useInterval';
import NavBar from './NavBar';
import { AppHeader } from './Header.styled';

let myName = Array.from("Josemaria Nriagu");

function Header() {
  const [name, setName] = useState("");
  const el = myName.length === 0 ? (myName = Array.from("Josemaria Nriagu"), myName.shift()) : myName.shift();

  useInterval(() => {
    name === "Josemaria Nriagu" ? setName(el) : setName(name + el);
  }, 500);

  useEffect(() => {
    window.addEventListener('scroll', () => scroll());

    // Define scroll behaviour
    const scroll = () => {
      const scrollButton = document.querySelector('#scroll');
      console.log(scrollButton);
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
      <div>
        <h1>{name}</h1>
        <h3>Team-Oriented Software Engineer</h3>
        <a href="#about">
          <img id="mouse" src="/mouse_icon.png" alt="mouse scroll" />
        </a>
        <a href="#home">
          <img id="scroll" src="/up-arrow.png" alt="scroll up" />
        </a>
      </div>
    </AppHeader>
  );
}

export default Header;
