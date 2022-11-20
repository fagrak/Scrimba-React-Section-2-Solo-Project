import React from "react";
import Articles from "./Articles";
import Navbar from "./Navbar";
import data from "./data";
import "./styles.css";

export default function App() {
  const articles = data.map((item) => {
    return (
      <Articles
        key={item.id}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        location={item.location}
        title={item.title}
        googleMapsUrl={item.googleMapsUrl}
        imageUrl={item.imageUrl}
      />
    );
  });

  // <Hero />
  return (
    <div>
      <Navbar />
      <section className="cards-list">{articles}</section>
    </div>
  );
}
