import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import { tempAlert } from './../About/hello';
import { FormWrapper } from './ContactForm.styled';

export default function ContactForm() {
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const resetForm = () => {
    firstnameRef.current.value = null;
    lastnameRef.current.value = null;
    emailRef.current.value = null;
    subjectRef.current.value = null;
    messageRef.current.value = null;
  };

  const onSubmit = event => {
    event.preventDefault();
    const user = {
      name: `${firstnameRef.current.value} ${lastnameRef.current.value}`,
      email: emailRef.current.value,
      subject: subjectRef.current.value || 'Message from Contact Form',
      message: messageRef.current.value
    };
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        {
          from_name: user.name,
          reply_to: user.email,
          message_html: `<p><strong>Subject:</strong> <br/>${user.subject} <br/><br/> <strong>Message:</strong> <br/>${user.message}</p>`,
          to_name: 'Dr. Flynn'
        },
        process.env.REACT_APP_USER_ID
      )
      .then(
        result => {
          resetForm();
          tempAlert({
            message: 'Voila! Your message has been sent 🥰',
            duration: 4000,
            attribute: 'response',
            el: 'contact-form',
            button: 'send-button',
            result
          });
        },
        error => {
          resetForm();
          tempAlert({
            message: 'An error occured. Please try again later 😟',
            duration: 4000,
            attribute: 'response',
            el: 'contact-form',
            button: 'send-button',
            error
          });
        }
      );
  };
  return (
    <FormWrapper onSubmit={onSubmit}>
      <div id="contact-form">
        <section>
          <label>
            First Name <sup>*</sup>
          </label>
          <input
            autoComplete="firstname"
            required
            type="text"
            placeholder="James"
            ref={firstnameRef}
          />
        </section>
        <section>
          <label>Last Name</label>
          <input
            autoComplete="lastname"
            type="text"
            placeholder="Doe"
            ref={lastnameRef}
          />
        </section>
        <section>
          <label>
            Email <sup>*</sup>
          </label>
          <input
            autoComplete="email"
            required
            type="email"
            placeholder="jamesdoe72@email.com"
            ref={emailRef}
          />
        </section>
        <section>
          <label>Subject</label>
          <input autoComplete="username" type="text" ref={subjectRef} />
        </section>
        <section>
          <label>
            Message <sup>*</sup>
          </label>
          <textarea required rows="10" type="text" ref={messageRef} />
        </section>
        <button id="send-button" type="submit">
          Send Message
        </button>
      </div>
    </FormWrapper>
  );
}
