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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/restaurants${
            searchTerm === "" ? "" : `?searchTerm=${searchTerm}`
          }`
        );
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <>
      <Header />
      <Hero />
      <RestaurantsList
        restaurants={restaurants}
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        loading={loading}
      />
      <Footer />
    </>
  );
}

export default App;
