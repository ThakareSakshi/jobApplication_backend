const mongoose=require("mongoose")

const jobSchema={
    title:{
        type:String,
        required:true
    },
    company:{
         type:String,
         required:true
    },
    location:{
        type:String,
        required:true
    }
    ,
    description:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
    ,
    experience:{
        type:String,
        required:true
    },
    skills:{
        type:String,
    }





}

const jobmodel=mongoose.model("jobs",jobSchema);
module.exports=jobmodel;