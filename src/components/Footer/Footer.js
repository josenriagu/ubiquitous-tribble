import React from 'react';

import { AppFooter } from './Footer.styled';

const Footer = ({ theme, toggleTheme }) => {

  const year = new Date().getFullYear();

  return (
    <AppFooter>
      <p>&copy; {year} Josemaria Nriagu. Design inspired by <a href="https://instagram.com/ugoezenduka" target="_blank" rel="noopener noreferrer">Ugo</a> </p>
      <p>Built with <span role="img" aria-label="red heart">❤️</span> <i className="devicon-react-original colored"></i><span role="img" aria-label="styled components, wine and pizza"> 💅 🍷 and 🍕</span></p>
      <p id="switch" onClick={toggleTheme}>Switch to {theme === 'dark' ? 'light' : 'dark'} mode</p>
      <div>
        <h5>Icons used courtesy of their respective authors from <a href="https://konpa.github.io/devicon/" target="_blank" rel="noopener noreferrer">Devicon,</a> <a href="https://iconscout.com/icons/" target="_blank" rel="noopener noreferrer">Iconscout,</a> <a href="https://www.flaticon.com/home" target="_blank" rel="noopener noreferrer">Flaticon</a> & <a href="https://commons.wikimedia.org/wiki/Main_Page" target="_blank" rel="noopener noreferrer">Commons</a>. </h5>
        <h5>|</h5>
        <h5><a href="https://github.com/josenriagu/ubiquitous-tribble/issues/new/choose" target="_blank" rel="noopener noreferrer">Submit an issue</a></h5>
      </div>
    </AppFooter>
  );
}

export default Footer;
