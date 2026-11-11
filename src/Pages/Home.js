import { Link } from "react-router-dom";

const homeInfo = [
  {
    id: 1,
    title: "Fresh Ingredients",
    description:
      "We use fresh ingredients to prepare delicious crab sushi every day.",
    image: "/images/california-crab.jpg",
  },
  {
    id: 2,
    title: "Delicious Sushi",
    description:
      "Enjoy a variety of crab sushi rolls made with care and quality.",
    image: "/images/spicy-crab.jpg",
  },
  {
    id: 3,
    title: "Our Best Platters",
    description:
      "Choose from our delicious sushi platters made for sharing.",
    image: "/images/family-platter.jpg",
  },
];

function Home({ restaurantName = "Sushi House" }) {
  return (
    <div className="home">
      <h1>Welcome to {restaurantName}</h1>

      <p>
        Discover the taste of fresh and delicious crab sushi.
        Prepared with love and served fresh for you.
      </p>

      <Link to="/menu">
        <button type="button">Explore Our Menu</button>
      </Link>

      <div className="home-info">
        {homeInfo.map(({ id, title, description, image }) => (
          <div className="home-info-card" key={id}>
            <img src={image} alt={title} />

            <h2>{title}</h2>

            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
