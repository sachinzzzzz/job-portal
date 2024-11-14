import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
        required:true
    },
    experienceLevel:{
        type:Number,
        required:true
    },
    position:{
        type:Number,
        required:true
    },
    logo:{
        type:String,
        default:""
    },
   
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
         ref:"User",
         required:true
    },
    applications:[{
        type:mongoose.Schema.Types.ObjectId,
         ref:"Application"
    }]

    

},{timestamps:true});
export const Job = mongoose.model("Job",jobSchema);