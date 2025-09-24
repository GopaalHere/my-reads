import '../styles/navbar.css'
const Navbar =()=>{
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
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar;