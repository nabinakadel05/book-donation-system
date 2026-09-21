import { useState } from "react";
import Navbar from "../components/Navbar";
import "../components/Navbar.css";
import "./Donate.css";

function Donate() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    condition: "",
    description: "",
    donorName: "",
    email: "",
    phone: "",
    location: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldBooks =
      JSON.parse(localStorage.getItem("donatedBooks")) || [];

    const newBook = {
      id: Date.now(),
      title: formData.title,
      author: formData.author,
      category: formData.category,
      condition: formData.condition,
      description: formData.description,
      donorName: formData.donorName,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      image:
        formData.image ||
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80",
    };

    localStorage.setItem(
      "donatedBooks",
      JSON.stringify([...oldBooks, newBook])
    );

    alert("Book donated successfully! 📚");

    setFormData({
      title: "",
      author: "",
      category: "",
      condition: "",
      description: "",
      donorName: "",
      email: "",
      phone: "",
      location: "",
      image: "",
    });

    window.location.href = "/books";
  };

  return (
    <div>
      <Navbar />

      <main className="donate-page">

        <div className="donate-heading">
          <p>GIVE A BOOK</p>

          <h1>Donate Your Book</h1>

          <span>
            Share a book and give someone a chance to learn,
            read and grow.
          </span>
        </div>

        <form
          className="donate-form"
          onSubmit={handleSubmit}
        >

          {/* Book Information */}

          <h2>Book Information</h2>

          <div className="form-group">
            <label>Book Title</label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter book title"
              required
            />
          </div>

          <div className="form-group">
            <label>Author</label>

            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter author name"
              required
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Category</label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select category</option>
                <option value="Education">Education</option>
                <option value="Technology">Technology</option>
                <option value="Novel">Novel</option>
                <option value="Business">Business</option>
                <option value="Self Help">Self Help</option>
                <option value="Finance">Finance</option>
              </select>
            </div>

            <div className="form-group">
              <label>Book Condition</label>

              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                required
              >
                <option value="">Select condition</option>
                <option value="Like New">Like New</option>
                <option value="Good">Good</option>
                <option value="Used">Used</option>
              </select>
            </div>

          </div>

          <div className="form-group">
            <label>Book Image URL</label>

            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Paste book image URL (optional)"
            />

            <small>
              Leave empty to use a default book image.
            </small>
          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Write something about your book..."
              required
            ></textarea>
          </div>

          {/* Donor Information */}

          <h2>Donor Information</h2>

          <div className="form-group">
            <label>Your Name</label>

            <input
              type="text"
              name="donorName"
              value={formData.donorName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
              />
            </div>

          </div>

          <div className="form-group">
            <label>Location</label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter your location"
              required
            />
          </div>

          <button
            type="submit"
            className="submit-donate"
          >
            Donate Book 📚
          </button>

        </form>

      </main>
    </div>
  );
}

export default Donate;