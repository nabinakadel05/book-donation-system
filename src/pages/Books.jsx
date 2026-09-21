import { useState } from "react";
import Navbar from "../components/Navbar";
import "../components/Navbar.css";
import "./Books.css";

function Books() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    {
      name: "Education",
      icon: "🎓",
      description: "Books for students and learning",
    },
    {
      name: "Technology",
      icon: "💻",
      description: "Programming and computer books",
    },
    {
      name: "Novel",
      icon: "📖",
      description: "Stories and fiction books",
    },
    {
      name: "Business",
      icon: "💼",
      description: "Business and management books",
    },
  ];

  const books = [
    {
      id: 1,
      title: "Introduction to Algorithms",
      author: "Thomas Cormen",
      category: "Education",
      condition: "Good",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOlhe5XF3lb_OBDFJbgl6KbzDoyCZbccasJ75bMXKGTw&s=10",
    },

    {
      id: 2,
      title: "Database System Concepts",
      author: "Abraham Silberschatz",
      category: "Education",
      condition: "Like New",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiW3rLFt1vqP6w6KGSN0kUTgJ7wXIeXjVgDIqXy38H1A&s=10",
    },

    {
      id: 3,
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Technology",
      condition: "Good",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHMaNmP7RZD_T9kk4MMV8i6VzxA01DSuIe5iBhf6pPgw&s=10",
    },

    {
      id: 4,
      title: "Python Crash Course",
      author: "Eric Matthes",
      category: "Technology",
      condition: "Like New",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbrWTAVTfgOnJ_XAOqzfTsGjVyhwAhSPNdYD-v-MHWg&s=10",
    },

    {
      id: 5,
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Novel",
      condition: "Good",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHolB0g1hNoyhtiU6xSqyl2noPzK3RWyLVZXD8z0HPww&s=10",
    },

    {
      id: 6,
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      category: "Novel",
      condition: "Good",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9IukJhi1RCAd-TCs74LW5IhsBT83ZwxWtf1lzUg0FA&s=10",
    },

    {
      id: 7,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      category: "Business",
      condition: "Good",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ExP3xUmqVSSaw9v8NhvU_K0DIQWJ-oWJTm9H4e-mNg&s=10",
    },

    {
      id: 8,
      title: "The Lean Startup",
      author: "Eric Ries",
      category: "Business",
      condition: "Like New",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkG7NFAnqOsdwaRooDwWh596U3bEhbV-uu_UEWV6sYDg&s=10",
    },
  ];

  const selectedBooks = books.filter(
    (book) => book.category === selectedCategory
  );

  const handleRequest = (bookTitle) => {
    alert("You selected: " + bookTitle);
  };

  return (
    <div>
      <Navbar />

      <main className="books-page">

        {/* Page Heading */}
        <section className="books-heading">
          <p>BOOK COLLECTION</p>

          <h1>Find a Book You Love</h1>

          <span>
            Choose a category and explore books shared by our community.
          </span>
        </section>

        {/* Categories */}
        {!selectedCategory && (
          <section className="category-grid">

            {categories.map((category) => (
              <div
                className="category-card"
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
              >
                <div className="category-icon">
                  {category.icon}
                </div>

                <h2>{category.name}</h2>

                <p>{category.description}</p>

                <button>
                  View Books
                </button>
              </div>
            ))}

          </section>
        )}

        {/* Selected Category Books */}
        {selectedCategory && (
          <section className="books-section">

            <button
              className="back-button"
              onClick={() => setSelectedCategory("")}
            >
              ← Back to Categories
            </button>

            <div className="selected-title">
              <h2>{selectedCategory} Books</h2>

              <p>
                Choose the book you want from this category.
              </p>
            </div>

            <div className="book-grid">

              {selectedBooks.map((book) => (
                <div
                  className="book-card"
                  key={book.id}
                >

                  {/* Book Image */}
                  <div className="book-image">
                    <img
                      src={book.image}
                      alt={book.title}
                    />
                  </div>

                  {/* Book Details */}
                  <div className="book-info">

                    <h2>{book.title}</h2>

                    <p className="book-author">
                      By {book.author}
                    </p>

                    <p className="book-condition">
                      Condition: {book.condition}
                    </p>

                    <button
                      className="request-button"
                      onClick={() =>
                        handleRequest(book.title)
                      }
                    >
                      Request Book
                    </button>

                  </div>

                </div>
              ))}

            </div>

          </section>
        )}

      </main>
    </div>
  );
}

export default Books;