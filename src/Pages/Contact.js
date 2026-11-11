function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <p>
        We would love to hear from you!
        Contact us for any questions or information.
      </p>

      <div className="contact-info">
        <h2>Get in Touch</h2>

        <p>
          <strong>Restaurant:</strong> Sushi House
        </p>

        <p>
          <strong>Email:</strong> sushijouse@gmail.com
        </p>

        <p>
          <strong>Phone:</strong> +961 81 123456
        </p>

        <p>
          <strong>Location:</strong> Lebanon
        </p>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>

        <form onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you for contacting Sushi House!");
          e.target.reset();
        }}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
          />

          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Message:</label>
          <textarea
            placeholder="Write your message here"
            rows="5"
            required
          />

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;