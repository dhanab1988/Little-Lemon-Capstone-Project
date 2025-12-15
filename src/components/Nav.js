<<<<<<< HEAD
import {Link} from "react-router-dom";
import {useState} from "react";
import CartBadge from "./CartBadge.js";
=======
import { Link } from "react-router-dom";
import {useState} from "react";
>>>>>>> 3db03a05d377ec2e74dfc3a79ac79a6915178bb5

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <img src="/Assets/Logo .svg" alt="Little Lemon Logo" className="logo" />
      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
  ☰
</button>


      <ul className={`nav-list ${isOpen ? "show" : ""}`}>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>

         {/* Cart Badge inside menu for mobile */}
          <li className="nav-cart-mobile">
            <CartBadge />
          </li>
        </ul>

        
      
    </nav>
  );
}

export default Nav;
