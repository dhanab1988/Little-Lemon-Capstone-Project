<<<<<<< HEAD
import { Link } from "react-router-dom";


=======
>>>>>>> 3db03a05d377ec2e74dfc3a79ac79a6915178bb5

function Footer() {
  return (
    <footer>
      <section className="footer-grid">

        {/* Logo */}
        <div>
<<<<<<< HEAD
          <img src="./Assets/Logo .svg" alt="Little Lemon Logo" className="footer-logo" />
=======
          <img src="Assets/logo .svg" alt="Little Lemon Logo" className="footer-logo" />
>>>>>>> 3db03a05d377ec2e74dfc3a79ac79a6915178bb5
        </div>

        {/* Navigation */}
        <nav aria-label="Doormat Navigation">
          <h4>Doormat Navigation</h4>
          <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        {/* Contact Information */}
        <address>
          <h4>Contact</h4>
          <p>123 Main Street, Chicago, IL</p>
          <p>+1 234 567 890</p>
          <p>Email: info@littlelemon.com</p>
        </address>

        {/* Social Media Links */}
        <section>
          <h4>Social Media Links</h4>
<<<<<<< HEAD
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </section>
=======
          <div class="social-icons">
  <a href="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a>
  <a href="https://twitter.com" target="_blank"><i class="fa-brands fa-twitter"></i></a>
  <a href="https://instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
  <a href="https://linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
  <a href="https://youtube.com" target="_blank"><i class="fa-brands fa-youtube"></i></a>
</div>
        </div>
>>>>>>> 3db03a05d377ec2e74dfc3a79ac79a6915178bb5

      </section>
    </footer>
  );
}

export default Footer;
