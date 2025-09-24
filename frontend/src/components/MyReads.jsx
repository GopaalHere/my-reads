import { useEffect, useState } from "react";
import { getreads } from "../../api/projectAPI.jsx";

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
    <div>
        {
            reads.map((read,index)=>(
             <h1>Tilte:{read.title}</h1>
            ))
        }
    </div>
    
    </>
 )   
}

export default MyReads;