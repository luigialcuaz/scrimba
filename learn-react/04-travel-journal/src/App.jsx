import React from "react";
import Navbar from "./components/Navbar";
import TravelSection from "./components/TravelSection";
import data from "./data";

export default function App() {
  const travelCard = data.map((item) => (
    <TravelSection key={item.id} {...item} />
  ));

  return (
    <div className="container">
      <Navbar />
      {travelCard}
    </div>
  );
}
