import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import RestaurantsList from "./components/RestaurantsList/RestaurantsList";
import Footer from "./components/Footer/Footer";

interface Restaurant {
  _id: string;
  name: string;
  address: string;
}

function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    fetch(
      `http://localhost:3001/api/restaurants${
        searchTerm === "" ? "" : `?searchTerm=${searchTerm}`
      }`
    )
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error("Error fetching restaurants:", error));
  }, [searchTerm]);

  return (
    <>
      <Header />
      <Hero />
      <RestaurantsList
        restaurants={restaurants}
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
      />
      <Footer />
    </>
  );
}

export default App;
