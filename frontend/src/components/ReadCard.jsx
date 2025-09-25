import { Link } from 'react-router-dom';
import { deleteRead } from '../../api/projectAPI.jsx'
import '../styles/readcard.css'
const ReadCard = ({ read, index, handleReadDelete }) => {
    const handleDelete = async (id) => {
        try {
            const res = await deleteRead(read._id);
            if (res.success) {
                handleReadDelete(read._id);
            }
        } catch (err) {
            console.log(err.message);
        }
    }
    return (
        <div className="readCardContainer">
            <h1>{index + 1}. {read.title}</h1>
            <div className="details">
                <h2>Author : {read.author}</h2>
                <h2>Read On : {read.date}</h2>
                <h2>Rating : {read.rating}</h2>
                <p>Notes: {read.notes}</p>
                <button onClick={handleDelete}>Delete</button>
                <Link to={`/update/${read._id}`}>Update</Link>
            </div>
        </div>
    )
}

export default ReadCard