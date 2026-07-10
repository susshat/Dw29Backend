import { Schema } from "mongoose";

const schoolSchema = Schema({
    name: {
        type:String,
        required : [true , "name is required"],
    },
    location: {
        type:String,
        required:[true , "location is required"]
    },
    phone: {
        type:Number,
        required:[true , "phone is required"]
    },
     email: {
        type:String,
        required : [true , "email is required"],
    },
    hasPlusTwo: Boolean,
},
{
    timestamps:true,
    toJSON:{
        transform:(doc,ret)=>{
            ret.id=ret._id;
            delete ret._id;
            delete ret.__v;       
         },
    }
});

export default schoolSchema;