import { useState } from 'react';
import '../styles/addnew.css'
import { addnew } from '../../api/projectAPI.jsx';
const AddNew = () => {
    const[title,setTitle] = useState("");
    const[author,setAuthor] = useState("");
    const[date,setDate] = useState("");
    const [rating, setRating] = useState(0);
    const[notes,setNotes] = useState("")
    console.log(title,author,rating,date,notes);
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const readData = {title:title,author:author,date:date,rating:rating,notes:notes};
        try{
            const result = await addnew(readData);
            alert(result.message);
            setTitle("");
            setAuthor("");
            setDate("");
            setRating(0);
            setNotes("")
        }catch(err){
            console.log(err.response?.data||err.message)
            alert("Login failed")
        }
    }
    return (
        <>
            <div className="addNewContainer">
                <h1>Add New </h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='enter title' />
                    <label htmlFor="">Author</label>
                    <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder='enter author' />
                    <div className="dateContainer">
                      <label htmlFor="">Read On</label>
                    <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
                    </div>
                    <div className="stars">
                    <label>Rating: {rating}</label>
                    <div className='starsx'>
                        {[1, 2, 3, 4, 5].map((i) => (
                            <span
                                key={i}
                                onClick={() => setRating(i)}
                                style={{
                                    cursor: "pointer",
                                    fontSize: "3rem",
                                    color: i <= rating ? "rgb(165, 42, 128)" : "gray"
                                }}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    </div>
                    <label htmlFor="">Notes</label>
                    <textarea name="" id="" value={notes} onChange={(e)=>setNotes(e.target.value)} rows={4}></textarea>
                    <button type='submit'>Add</button>
                </form>
            </div>
        </>
    )
}

export default AddNew;