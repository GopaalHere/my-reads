import express, { json } from "express";
import { connectDB } from "./config/db.js";
import cors from 'cors'
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import readRoutes from "./routes/readRoutes.js";

const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}));

app.use(cookieParser());

connectDB();

app.use('/api/auth',authRoutes)
app.use('/api/reads',readRoutes);

app.get("/",(req,res)=>{
    res.send({success:true,message:"Done"})
    console.log("done");
})


app.listen(3200)