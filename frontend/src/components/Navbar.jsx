import { useContext, useEffect, useState } from 'react'
import { logout } from '../../api/projectAPI.jsx'
import '../styles/navbar.css'
import { AuthContext } from '../context/AuthContext.jsx'
const Navbar = () => {

const{user,setUser} = useContext(AuthContext);


    const handleLogout = async () => {
        try {
            await logout();
            window.location.href = "/login";
        } catch (err) {
            console.log("Logout Failed", err.message)
        }
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
                                    <li>Add New</li>
                                    <li>Reads</li>
                                    <li><button onClick={handleLogout}>LogOut</button></li>
                                </>
                            ) : (
                                <>
                                    <li>SignUp</li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;