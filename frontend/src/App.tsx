import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import RestaurantsList from "./components/RestaurantsList/RestaurantsList";
import Footer from "./components/Footer/Footer";
import axios from "axios";
import ContactForm from "./components/ContactSection/ContactSection";
import OurServices from "./components/OurServices/OurServices";

interface Restaurant {
  _id: string;
  name: string;
  address: string;
}

function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://res-os-test-api.vercel.app/api/restaurants${
            searchTerm === "" ? "" : `?searchTerm=${searchTerm}`
          }`
        );
        const data = response.data;
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setLoading(false);
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
      <OurServices />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
