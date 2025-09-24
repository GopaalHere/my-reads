import '../styles/readcard.css'
const ReadCard=({read,index})=>{
    return(
       <div className="readCardContainer">
       <h1>{index+1}. {read.title}</h1>
       <div className="details">
        <h2>Author : {read.author}</h2>
        <h2>Read On : {read.date}</h2>
        <h2>Rating : {read.rating}</h2>
        <p>Notes: {read.notes}</p>
       </div>
       </div>
    )
}

export default ReadCard