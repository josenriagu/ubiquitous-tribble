import React from 'react';

import { icon } from './icons';
import { StackDiv, style } from './Stack.styled';

const Stack = () => {
  return (
    <StackDiv data-testid="stack" id="stack">
      <h2>Stack</h2>
      <p>I code and play with a couple of programming languages, frameworks, tools and technologies</p>
      <div>
        {
          icon.map((icon, idx) => icon.class ? <span key={idx}><i className={icon.class} style={style}></i></span> : <span key={idx}><img src={icon.src} alt={icon.alt} style={style} /></span>)
        }
      </div>
    </StackDiv>
  );
}

export default Stack;
