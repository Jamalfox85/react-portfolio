import { React, useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wckmscd",
        "template_x7ut42a",
        form.current,
        "user_R5QYF2K3Su4h1htQjU0ev"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-wrapper" id="contact">
      <h1 className="contact-header section-header">CONTACT</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h1>Let's Connect!</h1>
          <div className="contact-data">
            <div className="contact-data-phone">
              <a href="tel: 6785228843">
                <i className="fas fa-phone"></i>(678) 522-8843
              </a>
            </div>
            <div className="contact-data-email">
              <a href="mailto: fox.jamal@outlook.com">
                <i className="far fa-envelope"></i>Fox.Jamal@outlook.com
              </a>
            </div>
            <div className="contact-data-location">
              <i className="fas fa-map-marker-alt"></i>Atlanta, GA
            </div>
          </div>
          <div className="social-media">
            <a
              href="https://www.instagram.com/jamalfoxdesigns/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/JamalFoxDesigns"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/Jamalfox85"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <form className="form-wrapper" ref={form} onSubmit={sendEmail}>
          <div className="form-input-tier1">
            <label className="form-input-name">
              Name:
              <input required type="text" name="name" maxLength="25" />
            </label>
            <label className="form-input-email">
              Email:
              <input required type="email" name="email" maxLength="30" />
            </label>
          </div>
          <div className="form-input-subject">
            <label>
              Subject:
              <input required type="text" name="subject" />
            </label>
          </div>
          <div className="form-input-message">
            <label>
              Message:
              <textarea required name="message" />
            </label>
          </div>
          <input className="contact-submit-bttn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
