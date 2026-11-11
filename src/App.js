import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Orders from "./Pages/Orders";
//image: "/images/california-crab.jpg",


import "./App.css";

const sushiItems = [
  {
    id: 1,
    name: "California Crab Roll",
    description: "Fresh crab, avocado and cucumber. 4 pieces.",
    price: 8,
    image: "/images/california-crab.jpg",
  },
  {
    id: 2,
    name: "Crispy Crab Roll",
    description: "Crispy crab with special Japanese sauce. 4 pieces.",
    price: 10,
    image: "/images/crispy-crab.jpg",
  },
  {
    id: 3,
    name: "Spicy Crab Roll",
    description: "Crab mixed with spicy mayo and fresh vegetables. 4 pieces.",
    price: 9,
    image: "/images/spicy-crab.jpg",
  },
  {
    id: 4,
    name: "Crab Cheese Roll",
    description: "Delicious crab with creamy cheese. 4 pieces.",
    price: 10,
    image: "/images/crab-cheese.jpg",
  },
  {
    id: 5,
    name: "Crab Avocado Roll",
    description: "Fresh crab and creamy avocado. 4 pieces.",
    price: 9,
    image: "/images/crab-avocado.jpg",
  },
  {
    id: 6,
    name: "Baked Crab Roll",
    description: "Baked crab with our special Sakura sauce. 4 pieces.",
    price: 11,
    image: "/images/baked-crab.jpg",
  },
  {
    id: 7,
    name: "Mini Crab Platter",
    description: "A selection of crab sushi. 8 pieces.",
    price: 16,
    image: "/images/mini-platter.jpg",
  },
  {
    id: 8,
    name: "Family Crab Platter",
    description: "A family selection of our best crab rolls. 16 pieces.",
    price: 28,
    image: "/images/family-platter.jpg",
  },
  {
    id: 9,
    name: "Premium Crab Platter",
    description: "Our premium crab sushi selection. 24 pieces.",
    price: 39,
    image: "/images/premium-platter.jpg",
  },
  {
    id: 10,
    name: "Party Crab Boat",
    description: "A special sushi boat for sharing. 32 pieces.",
    price: 50,
    image: "/images/party-boat.jpg",
  },
  {
    id: 11,
    name: "Sushi Crab Cake",
    description: "Special crispy crab sushi cake. 4 pieces.",
    price: 12,
    image: "/images/crab-cake.jpg",
  },
];

const navLinks = [
  { id: 1, path: "/", label: "Home" },
  { id: 2, path: "/about", label: "About" },
  { id: 3, path: "/menu", label: "Menu" },
  { id: 4, path: "/contact", label: "Contact" },
  { id: 5, path: "/orders", label: "Track Order" },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems((currentItems) => [...currentItems, item]);
  }

  function removeFromCart(indexToRemove) {
    setCartItems((currentItems) =>
      currentItems.filter((_, index) => index !== indexToRemove)
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <BrowserRouter>
      <div className="app">

        <nav className="navbar">
          <Link to="/" className="navbar-logo">
            SUSHI HOUSE
          </Link>

          <div className="navbar-links">
            {navLinks.map(({ id, path, label }) => (
              <Link to={path} key={id}>
                {label}
              </Link>
            ))}

            <Link to="/cart">
              Cart ({cartItems.length})
            </Link>
          </div>
        </nav>

        <main>
          <Routes>
            <Route
              path="/"
              element={<Home restaurantName="Sushi House" />}
            />

            <Route
              path="/about"
              element={<About restaurantName="Sushi House" />}
            />

            <Route
              path="/menu"
              element={
                <Menu
                  sushiItems={sushiItems}
                  addToCart={addToCart}  />
              }
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                />
              }
            />

            <Route
              path="/orders"
              element={<Orders />}
            />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;