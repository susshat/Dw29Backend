import { model, mongo } from "mongoose";
import productSchema from "./productSchema.js";
import userSchema from "./userSchema.js";
import jobSchema from "./jonSchema.js";

const Product = model("Product",productSchema);
const User = model("User",userSchema);
const Job = model("Job", jobSchema);