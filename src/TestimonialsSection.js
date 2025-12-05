import React from "react";

function TestimonialsSection() {
  const testimonials = [
    { name: "Sarah", rating: "5/5", review: "Amazing food and great service!" },
    { name: "Michael", rating: "4/5", review: "Loved the ambience!" },
    { name: "Priya", rating: "5/5", review: "Best Mediterranean dishes!" },
    { name: "Daniel", rating: "4/5", review: "Highly recommended!" },
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>

      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <h3>{t.name}</h3>
            <p className="rating">{t.rating}</p>
            <p>{t.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
