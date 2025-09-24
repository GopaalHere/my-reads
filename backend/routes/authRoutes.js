import express from 'express';
import { login, signup } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup',signup);
router.post('/login',login)
router.post('/logout',(req,res)=>{
   res.clearCookie('token').json({success:true,message:"Logged Out"})
})
export default router;