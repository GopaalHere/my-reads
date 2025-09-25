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

export const getAnalytics=async(req,res)=>{
    try{
        const {period="montly"} = req.query;
        const userId = req.user.id;
        const reads = await Read.find({user:userId});
        const analytics = {};

        reads.forEach((read)=>{
            if(!read.date) return;
            const date = new Date(read.date);
            let key;
            if(period==="weekly"){
                const week = moment(date).week();
                const yaer = date.getFullYear();
                key = `W${week} ${year}`;
            }else if(period==="yearly"){
                key = `${date.getFullYear()}`;
            }else{
                key = date.toLocaleString("default",{month:"short",year:"numeric"});
            }
            analytics[key] = (analytics[key]||0)+1;
        });
        const sortedKeys = Object.keys(analytics).sort((a,b)=>{
            if(period==="yearly") return parseInt(a) - parseInt(b);
            if(period==="weekly"){
                const[wA,yA] = a.split(" ");
                const[wB,yB]= b.split(" ");
                return parseInt(yA)===parseInt(yB)
                ? parseInt(wA.slice(1)) - parseInt(wB.slice(1))
                : parseInt(yA) - parseInt(yB);
            }
            return new Date(a)-new Date(b);
        });
        const data = sortedKeys.map((k)=>analytics[k]);
        res.json({success:true,labels:sortedKeys,data});
    }catch(err){
        res.status(500).json({success:false,message:"server error",error:err.message})
    }
};