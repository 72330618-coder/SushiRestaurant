import { useState } from "react";

function Orders() {
  const [orderNumber, setOrderNumber] = useState("");
  const [searched, setSearched] = useState(false);

  function handleSearch(e) {
    e.preventDefault();
    setSearched(true);
  }

  return (
    <div className="orders-page">
      <h1>Track Your Order</h1>

      <p>
        Enter your order number to check your order status.
      </p>

      <form onSubmit={handleSearch}>
        <label>Order Number:</label>

        <input
          type="text"
          placeholder="Enter your order number"
          value={orderNumber}
          onChange={(e) => {
            setOrderNumber(e.target.value);
            setSearched(false);
          }}
          required
        />

        <button type="submit">
          Track Order
        </button>
      </form>

      {searched && (
        <div className="order-result">
          <h2>Order Not Found</h2>

          <p>
            Sorry, we could not find an order with
            number: {orderNumber}
          </p>

          <p>Please check your order number and try again.</p>
        </div>
      )}
    </div>
  );
}

export default Orders;