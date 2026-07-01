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
})
export default jobSchema;