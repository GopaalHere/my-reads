import { useState } from 'react';
import '../styles/addnew.css'
import {getOneRead, updateRead } from '../../api/projectAPI.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
const UpdateRead = () => {
    const[title,setTitle] = useState("");
    const[author,setAuthor] = useState("");
    const[date,setDate] = useState("");
    const [rating, setRating] = useState(0);
    const[notes,setNotes] = useState("")
    const {id} = useParams();
   const navigate = useNavigate();
    useEffect(()=>{
       loadOneRead(id);
    },[id])
   
    const loadOneRead = async(id)=>{
        try{
            const res = await getOneRead(id);
            setTitle(res.result.title)
            setAuthor(res.result.author)
            setDate(res.result.date)
            setRating(res.result.rating)
            setNotes(res.result.notes)
        }catch(err){
            console.error(err);
        }
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const updatedData = {title:title,author:author,date:date,rating:rating,notes:notes};
        try{
            const result = await updateRead(id,updatedData);
            if(result.success){
            navigate('/')
            setTitle("");
            setAuthor("");
            setDate("");
            setRating(0);
            setNotes("")
            }
        }catch(err){
            console.log(err.response?.data||err.message)
        }
    }
    return (
        <>
            <div className="addNewContainer">
                <h1>Update </h1>
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
                    <button type='submit'>Update</button>
                </form>
            </div>
        </>
    )
}

export default UpdateRead;