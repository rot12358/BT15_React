import { useContext, useState } from 'react'
import BookContext from '../context/book';
import "./bookshow.css";
import BookEdit from './BookEdit';
const BookShow = ({book}) => {
  const { onEdit, onDelete} =  useContext(BookContext);
    const image = `https://picsum.photos/seed/${book.id}/200/300`;
    const [isEdit, setIsEdit] = useState(false);
    const handleEdit = (id,term) => {
      onEdit(id,term);
      setIsEdit(false);
    };
    
  return (
    <div className="item">

      <div className='image'>
          <img src={image} alt="" />
      </div>
      
        {isEdit && <BookEdit book={book} onEdit={handleEdit}/>}
        {
          !isEdit && 
        <>
        <h2>{book.title}</h2>
        <p>{book.des}</p>
        <button onClick={() => onDelete(book.id)}>Delete</button>
        <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
        </>
      }
    </div>
  );
};

export default BookShow;