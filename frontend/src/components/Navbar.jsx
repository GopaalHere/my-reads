import { logout } from '../../api/projectAPI.jsx'
import '../styles/navbar.css'
const Navbar =()=>{
    const handleLogout=async()=>{
            try{
                await logout();
                window.location.href = "/login";
            }catch(err){
                console.log("Logout Failed",err.message)
            }
        }
    return(
        
        <>
        <div className='navContainer'>
            <div className="logoname">
              <h1>MyReads</h1>
            </div>
            <div className="navs">
                <ul>
                    <li>Add New</li>
                    <li>Reads</li>
                    <li>SignUp</li>
                    <li><button onClick={handleLogout}>LogOut</button></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar;