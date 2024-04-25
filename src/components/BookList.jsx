import BookShow from "./BookShow";
import "./booklist.css";
import { useContext } from "react";
import BookContext from "../context/book";
const BookList = () => {
  const {books} = useContext(BookContext);
  return (
    <div className="book-list">
        {books.map((book) => (
           <BookShow key={book.id} book={book}  />
        ))}
    </div>
  );
};

export default BookList;