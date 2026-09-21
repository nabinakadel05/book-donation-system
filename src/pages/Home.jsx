import Navbar from "../components/Navbar";
import "../components/Navbar.css";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-small-title">WELCOME TO BOOKBRIDGE</p>

          <h1>
            Share a Book,
            <br />
            <span>Share a Future.</span>
          </h1>

          <p className="hero-description">
            Give your unused books a new home and help someone discover
            knowledge, stories and new opportunities.
          </p>

          <div className="hero-buttons">
            <button className="donate-btn">Donate a Book</button>
            <button className="browse-btn">Browse Books</button>
          </div>

          <div className="hero-stats">
            <div>
              <h3>500+</h3>
              <p>Books Donated</p>
            </div>

            <div>
              <h3>300+</h3>
              <p>Happy Readers</p>
            </div>

            <div>
              <h3>100+</h3>
              <p>Books Shared</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="book-circle">
            📚
          </div>

          <div className="floating-card card-one">
            📖 <span>Read & Learn</span>
          </div>

          <div className="floating-card card-two">
            ❤️ <span>Give & Share</span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <div className="section-heading">
          <p>HOW IT WORKS</p>
          <h2>Make a Difference in 3 Simple Steps</h2>
        </div>

        <div className="steps">
          <div className="step-card">
            <div className="step-icon">📚</div>
            <h3>1. Donate</h3>
            <p>
              List the books you no longer need and give them a new purpose.
            </p>
          </div>

          <div className="step-card">
            <div className="step-icon">🔍</div>
            <h3>2. Find</h3>
            <p>
              Browse available books and find something useful for you.
            </p>
          </div>

          <div className="step-card">
            <div className="step-icon">🤝</div>
            <h3>3. Connect</h3>
            <p>
              Connect with other readers and share books with your community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;