import { useEffect, useState } from "react";
import { getreads } from "../../api/projectAPI.jsx";
import ReadCard from "./ReadCard.jsx";
const MyReads=()=>{
    const[reads,setMyreads] = useState([]);
    const[ascending,setAscending] = useState(false);

    useEffect(()=>{
     loadReads();
    },[])
    const loadReads = async()=>{
        const read = await getreads();
        setMyreads(read.reads)
    }
    const toggleSort=()=>{
        const sorted = [...reads].sort((a,b)=>ascending?a.rating-b.rating:b.rating-a.rating);
        setMyreads(sorted);
        setAscending(!ascending);
    }
 return(
    <>
    <button onClick={toggleSort} style={{fontWeight:"600",padding:"5px",cursor:"pointer"}}>Sort ↑↓</button>
    <div style={{display:"flex",flexWrap:"wrap"}}>
        {
            reads.map((read,index)=>(
             <ReadCard key={read._id} read={read} index={index}/>
            ))
        }
    </div>
    
    </>
 )   
}

export default MyReads;