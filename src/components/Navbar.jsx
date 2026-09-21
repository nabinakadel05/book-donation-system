function Navbar() {
  return (
    <nav className="navbar">

      <div
        className="logo"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        📚 BookBridge
      </div>

      <div className="nav-links">
        <a href="/">Home</a>

        <a href="/books">Books</a>

        <a href="/donate">Donate Book</a>

        <a href="/about">About</a>

        <a href="/contact">Contact</a>
      </div>

      <button
        className="login-btn"
        onClick={() => {
          window.location.href = "/login";
        }}
      >
        Login
      </button>

    </nav>
  );
}

export default Navbar;