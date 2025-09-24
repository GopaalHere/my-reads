import { useEffect, useState } from "react";
import { getreads } from "../../api/projectAPI.jsx";
import ReadCard from "./ReadCard.jsx";

const MyReads=()=>{

    const[reads,setMyreads] = useState([]);
    useEffect(()=>{
     loadReads();
    },[])
    const loadReads = async()=>{
        const read = await getreads();
        setMyreads(read.reads)
    }
    console.log(reads)
 return(
    <>
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