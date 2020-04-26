import React from 'react';
import { Switch } from 'antd';
import 'antd/lib/switch/style/index.css'; // imports the styles for the specific component. This is different from a general non-specific import 'antd/dist/antd.css' which may affect global styles.

import { AppFooter } from './Footer.styled';

const Footer = ({ theme, toggleTheme }) => {
  const year = new Date().getFullYear();

  return (
    <AppFooter data-testid="footer">
      <p>
        &copy; {year} Josemaria Nriagu. Design inspired by{' '}
        <a
          href="https://instagram.com/ugoezenduka"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ugo
        </a>{' '}
      </p>
      <p>
        Built with{' '}
        <span role="img" aria-label="red heart">
          ❤️
        </span>{' '}
        <i className="devicon-react-original colored"></i>
        <span role="img" aria-label="styled components, wine and pizza">
          {' '}
          💅 🍷 and 🍕
        </span>
      </p>
      {/* previous implementation. Legacy code */}
      {/* <p id="switch" onClick={toggleTheme}>Switch to {theme === 'dark' ? 'light' : 'dark'} mode</p> */}
      <span>
        {' '}
        {theme === 'dark' ? 'Toggle Light' : 'Toggle Dark'}{' '}
        <Switch
          className="switch"
          checkedChildren={<i className="fas fa-moon"></i>}
          unCheckedChildren={<i className="fas fa-sun"></i>}
          defaultChecked
          onClick={toggleTheme}
        />
      </span>
      <div>
        <h5>
          Icons used courtesy of their respective authors from{' '}
          <a
            href="https://konpa.github.io/devicon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Devicon,
          </a>{' '}
          <a
            href="https://iconscout.com/icons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Iconscout,
          </a>{' '}
          <a
            href="https://www.flaticon.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flaticon
          </a>{' '}
          &{' '}
          <a
            href="https://commons.wikimedia.org/wiki/Main_Page"
            target="_blank"
            rel="noopener noreferrer"
          >
            Commons
          </a>
          .{' '}
        </h5>
        <h5>|</h5>
        <h5>
          <a
            href="https://github.com/josenriagu/ubiquitous-tribble/issues/new/choose"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit an issue
          </a>
        </h5>
      </div>
    </AppFooter>
  );
};

export default Footer;
