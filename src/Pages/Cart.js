function Cart({ cartItems = [], removeFromCart, clearCart }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Add some delicious sushi!</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item, index) => (
              <div className="cart-card" key={`${item.id}-${index}`}>
                <img src={item.image} alt={item.name} />

                <div>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <p>Price: ${item.price}</p>

                  <button
                    type="button"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h2>Total: ${totalPrice}</h2>

            <button type="button" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
