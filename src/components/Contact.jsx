import React from "react"
import "../styles/contact.css"

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
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
        <input
          type="hidden"
          name="_next"
          // value="https://corymarker.com/"  enter for the redirect, usually back to the home page '/'
          value="http://localhost:3000"
        />
        <input type="hidden" name="_subject" value="Portfolio Reply" />
        <input type="hidden" name="_template" value="table" />
      </form>
    </section>
  )
}

export default Contact
