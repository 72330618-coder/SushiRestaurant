import { Link } from "react-router-dom";

function Navbar({ cartCount = 0 }) {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
         Sushi House
      </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/orders">Track Order</Link>
        <Link to="/cart">
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;