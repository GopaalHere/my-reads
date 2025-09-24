import axios from 'axios'

const API = axios.create({baseURL:import.meta.env.VITE_API,withCredentials:true})
const authAPI = axios.create({baseURL:import.meta.env.VITE_AUTH_API,withCredentials:true})

export const signup = async(userData)=>{
 const res = await authAPI.post('/signup',userData);
 return res.data;
}

export const login = async(userData)=>{
    const res = await authAPI.post('/login',userData);
    return res.data;
}

export const addnew = async(readData)=>{
    const res = await API.post('/addread',readData);
    return res.data;
}
export const getreads = async()=>{
    const res = await API.get('/myreads');
    return res.data;
}