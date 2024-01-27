import React from "react";
import "./RestaurantsList.scss";
import { spawn } from "child_process";

const restaurants = [
  {
    name: "Gourmet Grains",
    address: "123 Main Street, Cityville",
    tags: ["Italian", "Fine Dining", "Vegetarian"],
    status: "open",
    creationDate: new Date("2023-01-15"),
    hours: {
      open: "12:00 PM",
      close: "10:00 PM",
    },
    rate: "9.3",
    description:
      "Experience exquisite Italian dishes in a sophisticated and cozy ambiance at Gourmet Grains.",
    imageSrc: "/assets/images/res-1.jpg",
  },
  {
    name: "Spice Haven",
    address: "456 Spice Lane, Flavortown",
    tags: ["Indian", "Spicy", "Vegan Options"],
    status: "open",
    creationDate: new Date("2023-02-10"),
    hours: {
      open: "11:30 AM",
      close: "9:30 PM",
    },
    rate: "9.8",
    description:
      "Savor the vibrant and spicy flavors of Indian cuisine at Spice Haven. Vegan options available.",
    imageSrc: "/assets/images/res-1.jpg",
  },
  {
    name: "Seafood Delight",
    address: "789 Ocean Avenue, Sea City",
    tags: ["Seafood", "Waterfront", "Casual"],
    status: "closed",
    creationDate: new Date("2022-12-05"),
    hours: {
      open: "5:00 PM",
      close: "9:00 PM",
    },
    rate: "9.0",
    description:
      "Enjoy fresh seafood and a casual atmosphere with a waterfront view at Seafood Delight.",
    imageSrc: "/assets/images/res-1.jpg",
  },
  {
    name: "Green Eats Cafe",
    address: "234 Park Street, Greensville",
    tags: ["Vegetarian", "Healthy", "Cafe"],
    status: "open",
    creationDate: new Date("2023-03-20"),
    hours: {
      open: "8:00 AM",
      close: "6:00 PM",
    },
    rate: "9.5",
    description:
      "Indulge in delicious and healthy vegetarian options at Green Eats Cafe, a cozy and welcoming spot.",
    imageSrc: "/assets/images/res-1.jpg",
  },
  {
    name: "Mama Mia Pizzeria",
    address: "567 Pizza Avenue, Pepperoni Town",
    tags: ["Pizza", "Italian", "Family-Friendly"],
    status: "open",
    creationDate: new Date("2022-11-08"),
    hours: {
      open: "11:00 AM",
      close: "11:00 PM",
    },
    rate: "9.2",
    description:
      "Treat your taste buds to authentic Italian pizza and family-friendly vibes at Mama Mia Pizzeria.",
    imageSrc: "/assets/images/res-1.jpg",
  },
  {
    name: "Burger Bliss",
    address: "890 Juicy Street, Pattyville",
    tags: ["Burgers", "American", "Fast Food"],
    status: "closed",
    creationDate: new Date("2023-04-12"),
    hours: {
      open: "11:00 AM",
      close: "8:00 PM",
    },
    rate: "9.1",
    description:
      "Experience burger heaven with a variety of options and fast-food goodness at Burger Bliss.",
    imageSrc: "/assets/images/res-1.jpg",
  },
];

const RestaurantsList = () => {
  return (
    <section className="restaurants-section py-5 container">
      <h2>Discover Dining Gems</h2>
      <p>
        Explore a curated selection of top-rated restaurants, handpicked for an
        exceptional dining experience."
      </p>

      <ul className="restaurant-list d-flex flex-wrap flex-column gap-4 flex-md-row">
        {restaurants.map((res) => (
          <li key={res.name} className="d-flex res-item">
            <div
              className="col-5 p-3 res-img-container"
              style={{
                backgroundImage: `url(${res.imageSrc})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="d-inline-flex align-items-center img-tag col-auto gap-2 bg-light-red px-3 py-2">
                <img src="/assets/images/star.svg" alt="star" />
                <span>{res.rate}</span>
              </div>
            </div>
            <div className="text-section px-4 py-3 col-7">
              <h3>{res.name}</h3>
              <ul className="py-2">
                {res.tags.map((tag, index) => (
                  <li key={tag} className="d-inline-flex gap-1">
                    <span className="res-tag">{tag}</span>
                    {index < res.tags.length - 1 && (
                      <span className="me-1">&bull;</span>
                    )}
                  </li>
                ))}
              </ul>
              <p className="desc text-secondary py-3">{res.description}</p>
              <div className="d-flex py-2 align-items-center justify-content-between">
                {`${res.hours.open} - ${res.hours.close}`}
                <h4
                  className="status"
                  style={{
                    color: res.status === "open" ? "#5EAE53" : "salmon",
                  }}
                >
                  {res.status}
                </h4>
              </div>

              <div className="address d-flex align-items-center gap-2">
                {res.address}
                <img src="/assets/images/address-icon.svg" alt="working" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RestaurantsList;
