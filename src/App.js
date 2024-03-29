import React, { lazy, useEffect, useState, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './styles/Theme';

import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AppDiv } from './App.styled';

const About = lazy(() => import('./components/About'));
const Stack = lazy(() => import('./components/Stack'));
const Projects = lazy(() => import('./components/Projects'));

/**
 * weather icon configuration
 */
const weatherIcon = process.env.REACT_APP_WEATHER_ICON || 'wi-day-sunny';

const weatherIconDensity = process.env.REACT_APP_WEATHER_ICON_DENSITY || 100;

const weatherIconCreationTime =
  process.env.REACT_APP_WEATHER_ICON_CREATION_TIME || 3000;

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  useEffect(() => {
    const wIcon = document.querySelector('.wIcon');
    const container = document.querySelector('.container');

    function createWeatherIcon() {
      // clone initial weather icon
      const clone = wIcon.cloneNode(true);
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

    const s = setInterval(createWeatherIcon, weatherIconDensity);

    setTimeout(() => {
      clearInterval(s);
    }, weatherIconCreationTime);
  }, []);

  const iconClassName = `wi ${weatherIcon} wIcon`;

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <GlobalStyle h1 />
        {/* setting position to absolute to avoid pushing down other contents */}
        <div className="container" style={{ position: 'absolute' }}>
          <i className={iconClassName}></i>
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
