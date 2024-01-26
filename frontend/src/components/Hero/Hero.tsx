import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <main>
      <div className="container main-content py-4 py-md-0">
        <div className="text-section">
          <h1>Unlock Tastes with Culinary Compass.</h1>
          <p className="mt-4">
            Navigate the world of flavors with Culinary Compass Explorer. Your
            guide to discovering and savoring the best restaurants.
          </p>

          <button className="book-table mt-4">Book a Table</button>

          <ul className="social-icons d-none d-md-flex gap-2 mt-5 pt-4">
            <li>
              <a href="https://facebook.com" target="_blank">
                <img src="/assets/images/Facebook.svg" alt="facebook" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank">
                <img src="/assets/images/Insta.svg" alt="facebook" />
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank">
                <img src="/assets/images/youtube.svg" alt="facebook" />
              </a>
            </li>
          </ul>
        </div>
        <div className="images-container">
          <div className="image-container-main d-none d-md-block"></div>
          <div className="image-container-sm"></div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
