import React, { useRef } from 'react';
import { FormWrapper } from './ContactForm.styled';

export default function ContactForm() {
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const onSubmit = event => {
    event.preventDefault();
    const user = {
      name: `${firstnameRef.current.value} ${lastnameRef.current.value}`,
      email: emailRef.current.value,
      subject: subjectRef.current.value || 'Message from Contact Form',
      message: messageRef.current.value
    };
    // TODO: send form data to email
    console.log(user);
  };
  return (
    <FormWrapper onSubmit={onSubmit}>
      <div>
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
      </div>
      <button type="submit">Send Message</button>
    </FormWrapper>
  );
}
