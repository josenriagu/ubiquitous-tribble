import React, { useState, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './styles/Theme';

import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AppDiv } from './App.styled';

const About = React.lazy(() => import('./components/About'));
const Stack = React.lazy(() => import('./components/Stack'));
const Projects = React.lazy(() => import('./components/Projects'));

const flakeDensity = process.env.REACT_APP_FLAKE_DENSITY || 100

const flakeCreationTime = process.env.REACT_APP_FLAKE_CREATION_TIME || 3000

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  React.useEffect(() => {
    const flake = document.querySelector(".flake");
    const container = document.querySelector(".container");


    function createFlake() {
      // clone initial flake
      const clone = flake.cloneNode(true);
      /* add styles */
      // left padding
      clone.style.paddingLeft = `${Math.random() * 10}px`;
      // animation duration between 3-5
      clone.style.animationDuration = `${Math.random() * 5 + 3}s`;
      // opacity
      clone.style.opacity = Math.random() * 1;

      // append to parent container
      container.append(clone);
    }

    const s = setInterval(createFlake, flakeDensity);

    setTimeout(() => {
      clearInterval(s);
    }, flakeCreationTime);
  }, [])



  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <GlobalStyle h1 />
        {/* setting position to absolute to avoid pushing down other contents */}
        <div className='container' style={{ position: 'absolute' }}>
          <i className="wi wi-snowflake-cold flake"></i>
        </div>
        <AppDiv>
          <Header theme={theme} />
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Stack />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Projects theme={theme} />
          </Suspense>
          <Contact />
          <Footer theme={theme} toggleTheme={toggleTheme} />
        </AppDiv>
      </>
    </ThemeProvider>
  );
}

export default App;
