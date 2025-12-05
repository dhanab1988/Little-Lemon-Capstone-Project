import React from "react";
import restaurant from "./Assets/restaurant.jpg";
import chefs from "./Assets/restaurant chef B.jpg";

function AboutSection() {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          A cozy place where tradition meets modern taste. Run by brothers
          Mario and Adrian, Little Lemon is known for its warm hospitality.
        </p>
      </div>

      <div className="about-images">
        <img src={restaurant} alt="Restaurant" className="img1" />
        <img src={chefs} alt="Chefs" className="img2" />
      </div>
    </section>
  );
}

export default AboutSection;
