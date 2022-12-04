import React from 'react';
import '../styles/contact.css';
import { motion, useInView } from 'framer-motion';

function Contact() {
  const ref = React.useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      id="contact"
      className="contact"
      style={{
        transform: isInView ? 'none' : 'translateY(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <h2 ref={ref}>Contact Me</h2>
      <form
        action="https://formsubmit.co/cfd14fcd11cb6dae8de22321c87a3d4a"
        method="POST"
        className="form-content"
      >
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="form-control"
        />
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          placeholder="example@email.com"
          required
          className="form-control"
        />

        <label htmlFor="body"></label>
        <textarea
          name="body"
          type="body"
          cols="30"
          rows="4"
          placeholder="Message Me"
          required
          className="form-control"
        ></textarea>

        <button type="submit" className="submit form-control">
          Send Message
        </button>

        {/* FormSubmit Attributes */}
        <input type="text" name="_honey" className="honey" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://annadahlia.com" />
        <input type="hidden" name="_subject" value="Portfolio Reply" />
        <input type="hidden" name="_template" value="table" />
      </form>
    </motion.section>
  );
}

export default Contact;
