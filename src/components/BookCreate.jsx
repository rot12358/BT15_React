import { useState, useContext } from "react";
import "./bookcreate.css";
import BookContext from "../context/book";
const BookCreate = () => {
    const[title, setTitle] = useState("title");
    const[des, setDes] = useState("Description");
    const {onCreate} = useContext(BookContext);
    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleChangeDes = (e) => {
        setDes(e.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const reps = await onCreate({
            title,
            des,
        });
        console.log(reps);
        setTitle();
        setDes();

    };
  return (
    <div className="from-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
                <div className="Title">Title</div>
                <div className="title"><input onChange={handleChangeTitle} 
                type ="text" 
                id="title" 
                name="title" 
                /></div>
                <div className="Title">Description</div>
                <div className="des"><input onChange={handleChangeDes} 
                type ="text" 
                id="des" 
                name="des" 
                /></div>
               <input className="Create" type="submit" value="Create!" />
                
        </form>
    </div>
  );
};

export default BookCreate;