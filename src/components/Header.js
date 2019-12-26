import React, { useState, useEffect } from 'react';

import useInterval from '../hooks/useInterval';
import NavBar from './NavBar';
import { AppHeader } from '../styles/AppStyles';

let myName = Array.from("Josemaria Nriagu");

function Header() {
   const [name, setName] = useState("");

   const el = myName.length === 0 ? (myName = Array.from("Josemaria Nriagu"), myName.shift()) : myName.shift();
   useInterval(() => {
      name === "Josemaria Nriagu" ? setName(el) : setName(name + el);
   }, 500);

   useEffect(() => {
      if (name === "Josemaria Nriagu") {
         return () => clearInterval(useInterval);
      }
   }, [name]);

   return (
      <AppHeader>
         <NavBar />
         <div>
            <h1>{name}</h1>
            <h2>Team-Oriented Software Engineer</h2>
            <a href="#about">
               <img src="/mouse_icon.png" alt="mouse scroll" />
            </a>
         </div>
      </AppHeader>
   );
}

export default Header;
