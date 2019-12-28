import React from 'react';

import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import About from './components/About';
import Stack from './components/Stack';
import { AppDiv } from './App.styled';

function App() {
  return (
    <>
      <GlobalStyle h1 />
      <AppDiv>
        <Header />
        <About />
        <Stack />
      </AppDiv>
    </>
  );
}

export default App;
