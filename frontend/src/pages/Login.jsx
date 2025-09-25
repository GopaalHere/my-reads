import { useContext, useState } from 'react'
import '../styles/signup.css'
import { login } from '../../api/projectAPI.jsx';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';
const Login = () => {
    const { setUser } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { email: email, password: password };
        try {
            const result = await login(userData);
            if (result.success) {
                setUser(result.user);
                alert(result.message);
                setEmail("");
                setPassword("");
                navigate('/')
            }else{
                alert(result.message||"login failed")
            }
        }
        catch (err) {
            console.log(err.response?.data || err.message)
            alert("Login failed")
        }
    }
    return (
        <>
            <div className="signpageContainer">
                <h1>Login</h1>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter your email" required />
                    <label htmlFor="">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter password" required />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}


export default Login