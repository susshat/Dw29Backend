import { Schema } from "mongoose";

const productSchema = Schema({
    name: {
        type:String,
        required : [true , "name is required"],
    },
    quantity: {
        type:Number,
        required:[true , "quantity is required"]
    },
    price: {
        type:Number,
        required:[true , "price is required"]
    },
    isDamaged: Boolean,
});

export default productSchema;