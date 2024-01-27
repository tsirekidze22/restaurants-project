import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import RestaurantsList from "./components/RestaurantsList/RestaurantsList";

interface User {
  _id: string;
  username: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="">
      <Header />
      <Hero />
      <RestaurantsList />
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
