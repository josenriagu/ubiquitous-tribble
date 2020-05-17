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

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <GlobalStyle h1 />
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
