function About({ restaurantName = "Sushi House" }) {
  return (
    <div className="about-page">
      <h1>About {restaurantName}</h1>

      <p>
        Welcome to Sushi House !
        We are passionate about preparing fresh and delicious crab sushi
        for everyone to enjoy.
      </p>

      <div className="about-section">
        <h2>Our Story</h2>
        <p>
        Sushi House was created to bring delicious Japanese-inspired
          crab sushi to our customers. We focus on quality, freshness,
          and great taste.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide fresh ingredients, delicious sushi,
          and excellent service to every customer.
        </p>
      </div>

      <div className="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Fresh and quality ingredients</li>
          <li>A variety of delicious crab sushi</li>
          <li>Affordable prices</li>
          <li>Easy and convenient ordering</li>
          <li>Friendly customer service</li>
        </ul>
      </div>
    </div>
  );
}

export default About;