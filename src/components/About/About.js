import React from 'react';

import say from './hello';
import { AboutDiv } from './About.styled';

const About = () => {
  return (
    <AboutDiv id="about" data-testid="about">
      <div>
        <img src="/code.png" alt="gallery visit" />
      </div>
      <div id="greet">
        <h2>About me</h2>
        <p>Curious? Click on the button below and I will say hello <span role="img" aria-label="smiling face with sunglasses">😎</span></p>
        <button id="button" onClick={() => say.hello()}>say.hello()</button>
      </div>
    </AboutDiv>
  );
}

export default About;
