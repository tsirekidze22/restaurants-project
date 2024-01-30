import "./Footer.scss";
import SocialIcons from "../SocialIcons/SocialIcons";
const Footer = () => {
  return (
    <footer className="mt-5" id="contact">
      <div className="footer-cointent container">
        <div className="py-5 d-flex flex-column flex-md-row gap-5 gap-md-0 align-items-center justify-content-between">
          <div className="footer-nav">
            <ul className="d-flex flex-column gap-3 text-center text-md-start">
              <li>Email: Restaurant@ressearch.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Main Street, Cityville</li>
            </ul>
          </div>
          <div className="d-flex flex-column gap-3">
            <SocialIcons />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: 1,
            opacity: 0.2,
            background: "white",
          }}
        />
        <div className="d-flex flex-column flex-md-row gap-4 gap-md-0 py-4 align-items-center justify-content-between">
          <ul className="d-flex align-items-center justify-content-center gap-3">
            <li>
              <img src="/assets/images/cc-apple-pay.svg" alt="apple-pay" />
            </li>
            <li>
              <img
                src="/assets/images/cc-mastercard.svg"
                alt="mastercard-pay"
              />
            </li>
            <li>
              <img src="/assets/images/cc-visa.svg" alt="visa-pay" />
            </li>
          </ul>
          <p className="copyright">
            All right reserved - Tsotne Tsirekidze &copy;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
