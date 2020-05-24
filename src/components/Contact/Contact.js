import React from 'react';

import { ContactDiv } from './Contact.styled';
import ContactForm from './ContactForm';
import { handles } from './social';

const Contact = () => {
  return (
    <ContactDiv data-testid="contact" id="contact">
      <h2>Contact</h2>
      <p>
        Need a hand on an interesting project? Let's talk. I gatchu!{' '}
        <span role="img" aria-label="smiling face with smiling eyes">
          😊
        </span>
        <span role="img" aria-label="handshake">
          🤝
        </span>
      </p>
      <p>
        Off the keyboard and screens, I'm very social, we could talk about
        anything <br /> - art, music, science, technology etc. <br />
        Connect with me on any of these platforms or send a message through the
        form
      </p>
      <section>
        {handles.map((handle, idx) => (
          <span key={idx}>
            <a href={handle.href} target="_blank" rel="noopener noreferrer">
              <img src={handle.src} alt={handle.alt} />
            </a>
          </span>
        ))}
      </section>
      <ContactForm />
    </ContactDiv>
  );
};

export default Contact;
