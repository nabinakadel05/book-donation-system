import Navbar from "../components/Navbar";
import "../components/Navbar.css";
import "./About.css";

function About() {
  return (
    <div>
      <Navbar />

      <main className="about-page">

        {/* About Hero */}
        <section className="about-hero">
          <div className="about-hero-content">
            <p className="about-label">ABOUT BOOKBRIDGE</p>

            <h1>
              Connecting Readers,
              <br />
              <span>Sharing Knowledge.</span>
            </h1>

            <p className="about-description">
              BookBridge is a book-sharing platform created to connect
              readers, students and book lovers. Our goal is to give
              unused books a new home and make knowledge easier to share.
            </p>

            <button
              className="about-donate-btn"
              onClick={() => {
                window.location.href = "/donate";
              }}
            >
              Start Sharing 📚
            </button>
          </div>

          <div className="about-visual">
            <div className="about-circle">
              <span>📚</span>
            </div>

            <div className="about-floating-card floating-one">
              <span>📖</span>
              <div>
                <strong>Share Books</strong>
                <small>Give books a new life</small>
              </div>
            </div>

            <div className="about-floating-card floating-two">
              <span>❤️</span>
              <div>
                <strong>Help Readers</strong>
                <small>Spread knowledge</small>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Vision Community */}
        <section className="about-values">

          <div className="value-card">
            <div className="value-icon">🎯</div>

            <h2>Our Mission</h2>

            <p>
              Our mission is to make useful books accessible to more
              people by creating a simple platform for sharing and
              donating books.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🌱</div>

            <h2>Our Vision</h2>

            <p>
              We imagine a community where every unused book can find
              a new reader and every reader can discover something
              meaningful.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🤝</div>

            <h2>Our Community</h2>

            <p>
              BookBridge brings students, readers and book lovers
              together to create a culture of reading and sharing.
            </p>
          </div>

        </section>

        {/* Why BookBridge */}
        <section className="why-bookbridge">

          <div className="about-section-heading">
            <p>WHY BOOKBRIDGE?</p>

            <h2>Books Can Change Lives</h2>

            <span>
              A book you no longer need may be exactly what someone else
              is looking for.
            </span>
          </div>

          <div className="why-grid">

            <div className="why-card">
              <div className="why-icon">📚</div>

              <div>
                <h3>Give Books a New Life</h3>

                <p>
                  Share books that are sitting unused and give them
                  another opportunity to help someone.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">🎓</div>

              <div>
                <h3>Support Students</h3>

                <p>
                  Help students find educational books and useful
                  learning resources at an affordable way.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">🌍</div>

              <div>
                <h3>Reduce Waste</h3>

                <p>
                  Reusing and sharing books helps reduce unnecessary
                  waste and encourages responsible use of resources.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">❤️</div>

              <div>
                <h3>Build Connections</h3>

                <p>
                  Connect with other readers and create a friendly
                  community based on reading and knowledge sharing.
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* Statistics */}
        <section className="about-stats">

          <div className="stat-item">
            <h2>500+</h2>
            <p>Books Donated</p>
          </div>

          <div className="stat-item">
            <h2>300+</h2>
            <p>Happy Readers</p>
          </div>

          <div className="stat-item">
            <h2>100+</h2>
            <p>Books Shared</p>
          </div>

          <div className="stat-item">
            <h2>50+</h2>
            <p>Active Donors</p>
          </div>

        </section>

        {/* How It Works */}
        <section className="about-how">

          <div className="about-section-heading">
            <p>HOW BOOKBRIDGE WORKS</p>

            <h2>Simple. Useful. Meaningful.</h2>
          </div>

          <div className="how-grid">

            <div className="how-card">
              <div className="how-number">01</div>

              <h3>Donate</h3>

              <p>
                Have books you no longer use? Add them to BookBridge
                and give them a new reader.
              </p>
            </div>

            <div className="how-card">
              <div className="how-number">02</div>

              <h3>Explore</h3>

              <p>
                Browse different categories and discover books that
                match your interests.
              </p>
            </div>

            <div className="how-card">
              <div className="how-number">03</div>

              <h3>Connect</h3>

              <p>
                Request a book and connect with the person sharing
                it with the community.
              </p>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="about-cta">

          <div>
            <p>READY TO SHARE?</p>

            <h2>
              One Book Can Make
              <br />
              a Big Difference.
            </h2>

            <span>
              Share what you have. Help someone learn. Build a better
              reading community.
            </span>
          </div>

          <button
            onClick={() => {
              window.location.href = "/donate";
            }}
          >
            Donate a Book →
          </button>

        </section>

      </main>
    </div>
  );
}

export default About;