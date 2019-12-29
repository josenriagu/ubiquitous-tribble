import React from 'react';

import { ContactDiv } from './Contact.styled';
import { handles } from './social';

const Contact = () => {
  return (
    <ContactDiv id="contact">
      <h2>Contact</h2>
      <p>
        Want to grow your team? Hire me, I will bring aboard my passion and communication skills<span role="img" aria-label="smiling face with smiling eyes">😊</span>
      </p>
      <p>
        Need a hand on an interesting project? Let's talk. I gatchu! <span role="img" aria-label="">🤝</span>
      </p>
      <p>Off the keyboard and screens, I'm very social, we could talk about anything <br /> - art, music, science, technology etc. <br />Connect with me on any of these platforms</p>
      <div>
        {
          handles.map((handle, idx) =>
            <span id={idx}>
              <a href={handle.href} target="_blank" rel="noopener noreferrer">
                <img src={handle.src} alt={handle.alt} />
              </a>
            </span>
          )
        }
      </div>
    </ContactDiv>
  );
}

export default Contact;
