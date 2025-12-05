function TestimonialCard({ name, text, image }) {
  return (
    <div className="testimonial-card">
      <h4>Rating ★★★★☆</h4>

      <img src={image} alt={name} className="testimonial-img" />

      <h5>{name}</h5>

      <p>{text}</p>
    </div>
  );
}

export default TestimonialCard;
