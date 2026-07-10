import { Schema } from "mongoose";

const jobSchema = Schema({
     title: {
        type:String,
        required : [true , "title is required"],
    },
    location: {
        type:String,
        required:[true , "location is required"]
    },
    salary: {
        type:Number,
        required:[true , "salary is required"]
    },
},{
    timestamps:true,
    toJSON:{
        transform:(doc,ret)=>{
            ret.id=ret._id;
            delete ret._id;
            delete ret.__v;       
         },
    }
})
export default jobSchema;