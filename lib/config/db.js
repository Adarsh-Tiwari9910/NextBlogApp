import mongoose from "mongoose";
export const ConnectDB=async()=>{
    await mongoose.connect('mongodb+srv://adarsh2021it047:9910319571@cluster0.nta4w.mongodb.net/blog-app')
    console.log("DB Connected")
}