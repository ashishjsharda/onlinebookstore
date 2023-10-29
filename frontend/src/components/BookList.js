import React,{useState,useEffect} from "react";
function BookList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
            <li key={book.id}>
                <h2>{book.title}</h2>
                <p>Autor: {book.author}</p>
                <p>Price : {book.price}</p>
                <p>Description : {book.description}</p>
            </li>
        ))}
      </ul>
    </div>
  );
}