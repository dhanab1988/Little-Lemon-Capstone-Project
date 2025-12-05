function SpecialCard({ title, price, description, image }) {
  return (
    <div className="special-card">
      <img src={image} alt={title} />

      <div className="special-card-header">
        <h3>{title}</h3>
        <span className="price">{price}</span>
      </div>

      <p>{description}</p>

      <a href="#" className="order-link">
        Order a delivery 🚴
      </a>
    </div>
  );
}

export default SpecialCard;
