import express from 'express';
import { login, signup } from '../controllers/authController.js';
import { verfifyJWTtoken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup',signup);
router.post('/login',login)
router.post('/logout',(req,res)=>{
   res.clearCookie('token').json({success:true,message:"Logged Out"})
})

router.get('/me',verfifyJWTtoken,(req,res)=>{
   res.json({success:true,user:req.user});
})
export default router;