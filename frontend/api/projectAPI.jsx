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

export const logout = async()=>{
    const res = await authAPI.post('/logout');
    return res.data;
}
export const getcurrentuser = async()=>{
    const res = await authAPI.get('/me');
    return res.data;
}
export const deleteRead=async(id)=>{
    const res = await API.delete(`/delete/${id}`)
    return res.data;
}
export const getOneRead=async(id)=>{
    const res = await API.get(id);
    return res.data;
}
export const updateRead = async(id,updateData)=>{
    const res = await API.put(`/update/${id}`,updateData);
    return res.data;
}

export const getAnalytics = async(period="monthly")=>{
    const res = await API.get(`/analytics?period=${period}`);
    return res.data;
}