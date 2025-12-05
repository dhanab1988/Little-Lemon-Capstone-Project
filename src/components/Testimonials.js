import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const reviews = [
    { name: "Name", text: "Review text", image: "/user1.jpg" },
    { name: "Name", text: "Review text", image: "/user2.jpg" },
    { name: "Name", text: "Review text", image: "/user3.jpg" },
    { name: "Name", text: "Review text", image: "/user4.jpg" },
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>

      <div className="testimonials-grid">
        {reviews.map((review, index) => (
          <TestimonialCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
