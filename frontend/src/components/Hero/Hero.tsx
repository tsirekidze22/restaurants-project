import "./Hero.scss";
import SocialIcons from "../SocialIcons/SocialIcons";

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

          <a href="#services">
            <button className="book-table mt-4">Learn More</button>
          </a>
          <div className="d-none d-md-block mt-5 pt-4">
            <SocialIcons />
          </div>
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
