import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './styles/Theme';

import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AppDiv } from './App.styled';

function App() {

  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => (theme === 'light') ? setTheme('dark') : setTheme('light');

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <GlobalStyle h1 />
        <AppDiv>
          <Header theme={theme} />
          <About />
          <Stack />
          <Projects />
          <Contact />
          <Footer theme={theme} toggleTheme={toggleTheme} />
        </AppDiv>
      </>
    </ThemeProvider>
  );
}

export default App;
