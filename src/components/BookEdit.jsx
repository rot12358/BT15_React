import { useState,useContext } from "react";
import BookContext from "../context/book";
export const BookEdit = ({book, onEdit}) => {
    const[title, setTitle] = useState(book.title);
    const[des, setDes] = useState(book.des);
    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleChangeDes = (e) => {
        setDes(e.target.value);
    };
    const handleCancel = (e) => {
        setTitle(book.title);
        setDes(book.des);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        onEdit(book.id, {
            title,
            des,
        }
        );
    };
  return (
    <div>
        <h3>Edit a Book</h3>
        <form onSubmit={handleSubmit}>
                <label htmlFor="">Title</label>
                <input onChange={handleChangeTitle}
                type ="text" 
                id="title" 
                name="title"
                value={title}
                /><br></br>
                <input onChange={handleChangeDes} 
                value={des} 
                type ="text" 
                id="des" 
                name="des" 
                />
                <input className="Edit"  type="submit" value="Edit"/>
                <button onClick={handleCancel}>Cancel</button>
               
                
        </form>
        
    </div>
  )
}

export default BookEdit