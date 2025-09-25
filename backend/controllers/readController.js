import Read from "../models/Read.js";

export const addread = async (req, res) => {
    try {
        const { title, author, date, rating, notes } = req.body;
        const read = await Read.create({
            title,
            author,
            date,
            rating,
            notes,
            user: req.user.id,
        });
        res.json({ success: true, message: "New read Added", result: read })
    } catch (err) {
        res.json({ success: false, message: "Couldn't add", error: err.message })
    }
}
export const getreads = async(req,res)=>{
    try{
        const reads = await Read.find({user:req.user.id});
        res.json({success:true,message:"Fetched all the reads",reads});
    }catch(err){
        res.json({success:false,message:err.message})
    }
}
export const deleteRead = async(req,res)=>{
    try{
        const read = await Read.findByIdAndDelete(req.params._id);
        res.json({success:true,message:"Read Deleted",result:read})
    }catch(err){
        res.json({success:false,message:"CouldN't Delete",error:err.message})
    }
}
export const getOneRead = async(req,res)=>{
    try{
        const read = await Read.findById(req.params._id);
        res.json({success:true,message:"One Read Fetched",result:read});
    }catch(err){
        res.json({success:false,message:"Couldn't fetch the read",error:err.message})
    }
}
export const updateRead = async(req,res)=>{
    try{
        const{id} = req.params;
        const updateData = req.body;
        const read = await Read.findByIdAndUpdate(id,updateData,{new:true});
        if(!read){
            return res.json({success:false,message:"Read Not found"});
        }
        res.json({success:true,message:"Read data updated",result:read})
    }catch(err){
        res.json({success:false,error:err.message});
    }
}