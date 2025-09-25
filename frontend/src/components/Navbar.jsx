import { useContext, useEffect, useState } from 'react'
import { logout } from '../../api/projectAPI.jsx'
import '../styles/navbar.css'
import { AuthContext } from '../context/AuthContext.jsx'
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {

    const { user, setUser } = useContext(AuthContext);
    
    const location = useLocation();
    const handleLogout = async () => {
        try {
            await logout();
            window.location.href = "/login";
        } catch (err) {
            console.log("Logout Failed", err.message)
        }
    }
    let authLink
    if (location.pathname === '/login') {
        authLink = <li><Link to="/signup">SignUp</Link></li>
    } else if (location.pathname === '/signup') {
        authLink = <li><Link to="/login">Login</Link></li>
    } else {
        authLink = <li><Link to="/login">Login</Link></li>
    }
    return (

        <>
            <div className='navContainer'>
                <div className="logoname">
                    <h1>MyReads</h1>
                </div>
                <div className="navs">

                    <ul>
                        {
                            user ? (
                                <>
                                    <li><Link to='/addnew'>Add New</Link></li>
                                    <li><Link to='/'>Reads</Link></li>
                                    <li><button onClick={handleLogout}>LogOut</button></li>
                                </>
                            ) : (

                            authLink

                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;