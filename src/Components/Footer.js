import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2> Sushi House </h2>

        <p>
          Fresh and delicious crab sushi made with love.
        </p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/orders">Track Order</Link>
        </div>

        <p className="footer-copyright">
          © {new Date().getFullYear()}  Sushi House.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;