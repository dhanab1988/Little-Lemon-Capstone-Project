/* function Header() {
  return (
    <header className="header">
      <img id="logo" className="logo" src="/Logo.svg" alt="Little Lemon Logo" />
    </header>
  );
}

export default Header; */

function Header() {
  return (
   
    <header className="header">
    <img className="logo" src="/Logo.svg" alt="Little Lemon Logo" />

    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
</header>

  );
}

export default Header;
