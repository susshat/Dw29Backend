//the following function connects backend to mongoDb 

import mongoose from "mongoose";
import { dbUrl } from "../constant.js";

const connectToMongoDb = () =>{

    mongoose.connect(dbUrl);
    console.log("connected to database successfully.")

}

export default connectToMongoDb;