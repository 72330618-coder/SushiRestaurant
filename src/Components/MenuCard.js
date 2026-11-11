import Button from './Button';
function MenuCard({ item, addToCart }) {
  return (
    <div className="sushi-card">
      <img src={item.image} alt={item.name} />

      <h2>{item.name}</h2>

      <p>{item.description}</p>

      <p className="price">
        Price: ${item.price}
      </p>

      <button
        type="button"
        onClick={() => addToCart(item)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default MenuCard;