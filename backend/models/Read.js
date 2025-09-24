import mongoose from "mongoose";

const readSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: String, required: true },
  rating: { type: Number, required: true },
  notes: { type: String },
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",                        
    required: true
  }
},{timestamps:true});

export default mongoose.model("Read", readSchema);