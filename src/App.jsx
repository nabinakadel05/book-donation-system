import Home from "./pages/Home";
import Books from "./pages/Books";
import Donate from "./pages/Donate";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const path = window.location.pathname;

  // Login page
  if (path === "/login") {
    return <Login />;
  }

  // Donate page - login required
  if (path === "/donate") {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      window.location.href = "/login";
      return null;
    }

    return <Donate />;
  }

  // Books page
  if (path === "/books") {
    return <Books />;
  }

  // About page
  if (path === "/about") {
    return <About />;
  }

  // Contact page
  if (path === "/contact") {
    return <Contact />;
  }

  // Home page
  return <Home />;
}

export default App;