import { Schema } from "mongoose";

const userSchema = Schema({
    name:{
        type:String,
        required: [true,"name is required"],
    },
    email:{
        type:String,
        required: [true,"email is required"],
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    phoneNumber:{
        type:Number,
        required: [true,"Phonenumber is required"],
    
},
   roll:{
        type:Number,
        required:[true,"roll is required"],
    },
       isMaried:{
        type:Boolean,
        required:[true,"it is required"],
    },
       dob:{
        type:Date,
        required:[true,"dob is required"],
    },
},
{
    timestamps: true,
    //this changes the _id key in just id and remmoves unnecessary keys
    toJSON:{
        transform:(doc,ret)=>{
            ret.id=ret._id;
            delete ret._id;
            delete ret.__v;       
         },
    }
});

export default userSchema;