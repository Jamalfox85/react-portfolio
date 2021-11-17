import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Let's Connect!</h1>
          <div className="contact-data">
            <div className="contact-data-phone">
              <a href="tel: 6785228843">
                <i class="fas fa-phone"></i>(678) 522-8843
              </a>
            </div>
            <div className="contact-data-email">
              <a href="mailto: fox.jamal@outlook.com">
                <i class="far fa-envelope"></i>Fox.Jamal@outlook.com
              </a>
            </div>
            <div className="contact-data-location">
              <i class="fas fa-map-marker-alt"></i>Atlanta, GA
            </div>
          </div>
          <div className="social-media">
            <a
              href="https://www.instagram.com/jamalfoxdesigns/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/JamalFoxDesigns"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/Jamalfox85"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <form className="form-wrapper">
          <div className="form-input-tier1">
            <label className="form-input-name">
              Name:
              <input type="text" name="name" maxlength="25" />
            </label>
            <label className="form-input-email">
              Email:
              <input type="email" name="email" maxlength="30" />
            </label>
          </div>
          <label className="form-input-subject">
            Subject:
            <input type="text" name="subject" />
          </label>
          <label className="form-input-message">
            Message:
            <input type="textfield" name="message" />
          </label>
          <input className="contact-submit-bttn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
