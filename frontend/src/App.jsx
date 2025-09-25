import { Navigate, Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import AddNew from "./components/AddNew"
import MyReads from "./components/MyReads"
import { useState } from "react"
import UpdateRead from "./components/UpdateRead"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import Analytics from "./components/Analytics"

function App() {
  const{user} = useContext(AuthContext);
  return (
    <>
      <Navbar/>
      <Routes>
        {
          !user ? (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path='*' element={<Navigate to='/' />} />
            </>
          ) : (
            <>
              <Route path="/" element={<MyReads />} />
              <Route path="/update/:id" element={<UpdateRead />} />
              <Route path="/analytics" element={<Analytics/>}/>
              <Route path="/addnew" element={user ? <AddNew /> : <Navigate to='/login' replace />} />
            </>
          )
        }

      </Routes>
    </>
  )
}

export default App
