function Menu({ sushiItems = [], addToCart }) {
  return (
    <div className="menu-page">
      <h1>Our Sushi Menu</h1>

      <p>Discover our delicious crab sushi collection.</p>

      <p>Roll prices are for 4 pieces.</p>

      {sushiItems.length === 0 ? (
        <p>No sushi items are available at the moment.</p>
      ) : (
        <div className="sushi-list">
          {sushiItems.map((item) => (
            <div className="sushi-card" key={item.id}>
              <img src={item.image} alt={item.name} />

              <h2>{item.name}</h2>

              <p>{item.description}</p>

              <p>Price: ${item.price}</p>

              <button
                type="button"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
