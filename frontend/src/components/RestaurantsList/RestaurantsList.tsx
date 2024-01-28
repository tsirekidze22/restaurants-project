import React from "react";
import "./RestaurantsList.scss";
import { spawn } from "child_process";
import ResItem from "../ResItem/ResItem";

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
    <section className="restaurants-section py-3 py-md-5 mt-5 container">
      <h2>Discover Dining Gems</h2>
      <p className="text-secondary pt-3 pb-4 mb-4 section-desc">
        Explore a curated selection of top-rated restaurants, handpicked for an
        exceptional dining experience.
      </p>

      <ul className="restaurant-list d-flex flex-wrap flex-column gap-4 flex-md-row">
        {restaurants.map((res, index) => (
          <ResItem key={index} res={res}/>
        ))}
      </ul>
    </section>
  );
};

export default RestaurantsList;
