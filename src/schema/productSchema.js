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

export default productSchema;