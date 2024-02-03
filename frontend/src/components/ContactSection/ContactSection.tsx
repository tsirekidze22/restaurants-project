import "./ContactSection.scss";
import ContactForm from "../ContactForm/ContactForm";

const ContactSection = () => {
  return (
    <section className="contact-section mt-5" id="contact">
      <div className="contact-content d-flex flex-column flex-md-row justify-content-between container">
        <div className="form-wrapper pt-5">
          <ContactForm />
        </div>
        <div className="img-container pt-5 d-none d-md-block">
          <h3 className="phone-text">Culinary Compass</h3>
          <img src="/assets/images/iphone.svg" alt="phone" className="phone" />
          <img src="/assets/images/dots.svg" alt="dots" className="dots" />
          <img src="/assets/images/dots.svg" alt="dots" className="dots2" />
          <img
            src="/assets/images/pattern.svg"
            alt="pattern"
            className="pattern"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
