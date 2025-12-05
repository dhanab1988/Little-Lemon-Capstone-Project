import React from "react";
import greekSalad from "./Assets/greek salad.jpg";
import bruchetta from "./Assets/bruchetta.svg";
import lemonDessert from "./Assets/lemon dessert.jpg";

function SpecialsSection() {
  const specials = [
    {
      img: greekSalad,
      title: "Greek Salad",
      price: "$12.99",
      description:
        "Crispy lettuce, peppers, olives and our Chicago-style feta cheese.",
    },
    {
      img: bruchetta,
      title: "Bruschetta",
      price: "$5.99",
      description:
        "Grilled bread smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      img: lemonDessert,
      title: "Lemon Dessert",
      price: "$4.99",
      description:
        "Authentic homemade lemon dessert with rich flavors and softness.",
    },
  ];

  return (
    <section className="specials">
      <div className="specials-header">
        <h2>Specials</h2>
        <button className="menu-btn">Online Menu</button>
      </div>

      <div className="specials-grid">
        {specials.map((item, index) => (
          <div className="special-card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="card-info">
              <div className="card-title">
                <h3>{item.title}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.description}</p>
              <button className="order-btn">Order a Delivery</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpecialsSection;
