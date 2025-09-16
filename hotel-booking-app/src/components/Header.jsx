import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <h2>Hotel Booking</h2>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/booking">Booking</Link>
    </nav>
  </header>
);

export default Header;
