import axios from 'axios'
const authAPI = axios.create({baseURL:import.meta.env.VITE_AUTH_API})

export const signup = async(userData)=>{
 const res = await authAPI.post('/signup',userData);
 return res.data;
}

export const login = async(userData)=>{
    const res = await authAPI.post('/login',userData);
    return res.data;
}