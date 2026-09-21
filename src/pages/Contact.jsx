import Navbar from "../components/Navbar";
import "../components/Navbar.css";
import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    e.target.reset();
  };

  return (
    <div>
      <Navbar />

      <main className="contact-page">

        {/* Heading */}
        <section className="contact-heading">
          <p>GET IN TOUCH</p>

          <h1>Contact Us</h1>

          <span>
            Have a question or want to know more about BookBridge?
            We would love to hear from you.
          </span>
        </section>

        {/* Contact Content */}
        <section className="contact-container">

          {/* Contact Information */}
          <div className="contact-info">

            <h2>Let's Talk</h2>

            <p>
              If you have any questions, suggestions or problems,
              feel free to contact us.
            </p>

            <div className="contact-item">
              <div className="contact-icon">📧</div>

              <div>
                <h3>Email</h3>
                <p>bookbridge@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>

              <div>
                <h3>Phone</h3>
                <p>+977 9800000000</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>

              <div>
                <h3>Location</h3>
                <p>Kathmandu, Nepal</p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="contact-form-box">

            <h2>Send Us a Message</h2>

            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label>Your Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Subject</label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button type="submit">
                Send Message →
              </button>

            </form>

          </div>

        </section>

      </main>
    </div>
  );
}

export default Contact;