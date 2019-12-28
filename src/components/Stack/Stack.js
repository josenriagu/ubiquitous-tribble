import React from 'react';

import { icon } from './icons';
import { StackDiv, style } from './Stack.styled';

const Stack = () => {
  return (
    <StackDiv id="stack">
      <h2>My Stack</h2>
      <p>I code and play with a couple of programming languages, frameworks, tools and technologies</p>
      <div>
        {
          icon.map(icon => icon.class ? <span><i className={icon.class} style={style}></i></span> : <span><img src={icon.src} alt={icon.alt} style={style} /></span>)
        }
      </div>
    </StackDiv>
  );
}

export default Stack;
