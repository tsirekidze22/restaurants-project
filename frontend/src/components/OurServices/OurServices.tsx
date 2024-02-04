import React from "react";
import "./OurServices.scss";

const servicesData = [
  {
    image: "/assets/images/compass.svg",
    title: "Culinary Guides",
    description:
      "Explore our curated culinary guides and discover diverse cuisines, food trends, and unique dining experiences.",
  },
  {
    image: "/assets/images/map.svg",
    title: "Food Exploration",
    description:
      "Embark on a journey of food exploration with our comprehensive travel guides, uncovering local dishes and hidden gems.",
  },
  {
    image: "/assets/images/utensils.svg",
    title: "Recipe Collection",
    description:
      "Access our rich collection of recipes, ranging from traditional classics to innovative and mouthwatering creations.",
  },
  {
    image: "/assets/images/users.svg",
    title: "Community Engagement",
    description:
      "Connect with a vibrant food community, share your culinary experiences, and stay updated on the latest food trends.",
  },
];

const OurServices = () => {
  return (
    <section className="container services-section my-5 pb-md-5" id="services">
      <h2>Culinary Compass Services</h2>
      <p>
        Discover, savor, and explore. Our services cater to your culinary
        journey, providing personalized recommendations, insightful guides, and
        a vibrant food community. Welcome to a world of flavors at your
        fingertips.
      </p>
      <div className="d-flex flex-wrap gap-4 mt-5">
        {servicesData.map((service, index) => (
          <div className="service py-4 d-flex flex-column align-items-center">
            <div className="icon-wrapper d-flex justify-content-center align-items-center">
              <img
                src={service.image}
                alt={service.title}
                className="card-image"
              />
            </div>

            <div className="card-content">
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
