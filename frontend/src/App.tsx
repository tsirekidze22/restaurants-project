import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import RestaurantsList from "./components/RestaurantsList/RestaurantsList";

interface Restaurant {
  _id: string;
  name: string;
  address: string;
}

function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error("Error fetching restaurants:", error));
  }, []);

  return (
    <div className="">
      <Header />
      <Hero />
      <RestaurantsList restaurants={restaurants} />
    </div>
  );
}

export default App;
