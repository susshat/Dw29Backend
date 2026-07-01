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
    
}
});

export default userSchema;