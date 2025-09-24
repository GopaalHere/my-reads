import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import AddNew from "./components/AddNew"
import MyReads from "./components/MyReads"

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<MyReads/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/addnew" element={<AddNew/>}/>
      </Routes>
    </>
  )
}

export default App
