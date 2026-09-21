import Navbar from "../components/Navbar";
import "../components/Navbar.css";
import "./Login.css";

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("isLoggedIn", "true");

    window.location.href = "/donate";
  };

  return (
    <div>
      <Navbar />

      <section className="login-page">
        <div className="login-box">
          <div className="login-icon">📚</div>

          <h1>Welcome Back</h1>
          <p>Login to donate your books</p>

          <form onSubmit={handleLogin}>
            <div className="login-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="login-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="login-submit">
              Login
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;