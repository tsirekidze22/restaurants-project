import React from "react";
import "./RestaurantsList.scss";
import { spawn } from "child_process";
import ResItem from "../ResItem/ResItem";

type Props = {
  restaurants: any[];
};

const RestaurantsList: React.FC<Props> = ({ restaurants }) => {
  return (
    <section className="restaurants-section py-3 py-md-5 mt-5 container">
      <h2>Discover Dining Gems</h2>
      <p className="text-secondary py-3 section-desc">
        Explore a curated selection of top-rated restaurants, handpicked for an
        exceptional dining experience.
      </p>

      <div className="search-wrapper my-4">
        <input
          type="text"
          placeholder="Search Restaurant..."
          className="search-input"
        />
        <img
          src="/assets/images/search-icon.svg"
          alt="search"
          className="search-icon"
        />
      </div>
      <ul className="d-flex flex-wrap flex-column gap-4 flex-md-row">
        {restaurants.map((res, index) => (
          <ResItem key={index} res={res} />
        ))}
      </ul>
    </section>
  );
};

export default RestaurantsList;
