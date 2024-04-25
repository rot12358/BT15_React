import { createContext, useState } from "react";
import { deleteBook,createBook,updateBook,fetchBooks} from "../api";

const BookContext = createContext()

const Provider = ({children}) => {
    const [books, setBooks] = useState([]);
    const handleDelete = async (id) => {
        const book = await deleteBook(id);
        setBooks(books.filter((item) => item.id !== book.id));
      };
      const handleCreate = async (term) => {
        const book = await createBook(term);
        if (book) setBooks([...books, book])
      };
      const handleUpdate = async(id, term)=>{
        const book = await updateBook(id,term);
        setBooks(
          books.map((item) => item.id === book.id? book: item)
          );
        };
      const getAllBooks = async () => {
            const tams = await fetchBooks();
            setBooks(tams);
        };
        
    const valueShare = {
        onEdit : handleUpdate,
        onDelete : handleDelete,
        onCreate :  handleCreate,
        getAllBooks,
        books,
    };
    return (
     <BookContext.Provider value={valueShare}>{children}</BookContext.Provider>
    )
}
export {Provider};
export default BookContext;