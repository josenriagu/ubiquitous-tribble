import React from 'react';

import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import About from './components/About';
import { AppDiv } from './App.styled';

function App() {
  return (
    <>
      <GlobalStyle h1 />
      <AppDiv>
        <Header />
        <About />
      </AppDiv>
    </>
  );
}

export default App;
