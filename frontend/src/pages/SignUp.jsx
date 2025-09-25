import { useState } from 'react'
import '../styles/signup.css'
import { signup } from '../../api/projectAPI.jsx';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { name: name, email: email, password: password };
        try {
            const result = await signup(userData);
            if (result.success) {
                alert(result.message);
                setEmail("");
                setName("");
                setPassword("");
                navigate('/login')
            }
        }
        catch (err) {
            console.log(err.response?.data || err.message)
            alert("Signup failed")
        }
    }
    return (
        <>
            <div className="signpageContainer">
                <h1>SignUp</h1>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="enter your name" required />
                    <label htmlFor="">Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter your email" required />
                    <label htmlFor="">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter password" required />
                    <button type="submit">SignUp</button>
                </form>
            </div>
        </>
    )
}


export default SignUp