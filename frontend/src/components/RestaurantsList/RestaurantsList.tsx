import React from "react";
import "./RestaurantsList.scss";
import ResItem from "../ResItem/ResItem";

type Props = {
  restaurants: any[];
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
  loading?: boolean;
};

const RestaurantsList: React.FC<Props> = ({
  restaurants,
  searchTerm,
  onSearchTermChange,
  loading,
}) => {
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchTermChange(e.target.value);
  };

  return (
    <section
      id="restaurants"
      className="restaurants-section container py-3 py-md-5 mt-5 "
    >
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
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <img
          src="/assets/images/search-icon.svg"
          alt="search"
          className="search-icon"
        />
      </div>
      <ul className="d-flex flex-wrap flex-column gap-4 flex-md-row">
        {loading ? (
          <div style={{ margin: "100px auto" }}>
            <img
              src="/assets/images/work-in-progress.gif"
              alt="Loading...."
              style={{ maxWidth: 120 }}
            />
          </div>
        ) : restaurants.length === 0 ? (
          <div className="container not-found-wrapper d-flex flex-column align-items-center">
            <img src="/assets/images/not-found.svg" alt="not found" />
            <h3>Sorry, no restaurant found for now...</h3>
          </div>
        ) : (
          restaurants.map((res, index) => <ResItem key={index} res={res} />)
        )}
      </ul>
    </section>
  );
};

export default RestaurantsList;
