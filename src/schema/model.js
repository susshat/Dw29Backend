import { model, mongo } from "mongoose";
import productSchema from "./productSchema.js";
import userSchema from "./userSchema.js";
import jobSchema from "./jonSchema.js";
import schoolSchema from "./schoolSchema.js";

export const Product = model("Product",productSchema);
export const User = model("User",userSchema);
export const Job = model("Job", jobSchema);
export const School = model("School",schoolSchema);