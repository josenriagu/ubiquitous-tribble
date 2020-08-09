import React from 'react';

import say from './hello';
import revertSrc from '../../utils/revert';
import { AboutDiv } from './About.styled';

const baseUrl =
  'https://res.cloudinary.com/thedrflynn/image/upload/v1589706435/portfolio';

const About = () => {
  return (
    <AboutDiv id="about" data-testid="about">
      <div>
        <img
          onError={(e) => revertSrc(e, `${baseUrl}/code_p.png`)}
          src={`${baseUrl}/code.webp`}
          alt="gallery visit"
        />
      </div>
      <div id="greet">
        <h2>About me</h2>
        <p>
          Curious? Click on the button below and I will say hello{' '}
          <span role="img" aria-label="smiling face with sunglasses">
            😎
          </span>
        </p>
        <button id="button" aria-label="say hello" onClick={() => say.hello()}>
          say.hello()
        </button>
      </div>
    </AboutDiv>
  );
};

export default About;
