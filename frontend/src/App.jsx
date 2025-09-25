import { Navigate, Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import AddNew from "./components/AddNew"
import MyReads from "./components/MyReads"
import { useState } from "react"

function App() {
   const[user,setUser] = useState(null);
  return (
    <>
    <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<MyReads/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login setUser={setUser}/>}/>
        <Route path="/addnew" element={user?<AddNew/>:<Navigate to='/login' replace/>}/>
      </Routes>
    </>
  )
}

export default App
