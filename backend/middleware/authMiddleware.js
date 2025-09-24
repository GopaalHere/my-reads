import jwt from 'jsonwebtoken';

export const verfifyJWTtoken=(req,res,next)=>{
    const token = req.cookies?.token;

    if(!token){
        return res.status(401).json({success:false,message:"No Token Provided"});
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
     if(err) return res.status(401).json({success:false,message:"Invalid Token"});
     req.user = decoded;
     next();
    })
}