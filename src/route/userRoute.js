import { Router } from "express";
import { User } from "../schema/model.js";
import { userDelete, userGet, userGetSpecific, userPatch, userPost } from "../controller/userController.js";
import userValidationFun from "../middleware/validation.js";
import Joi from "joi";


const userRoute = Router()

// let m2 = (value) =>{
//  return (req,res,next)=>{
//     console.log("i am m2")
//    if(value){
//     next()
//    }else{

//    }
//  }
// }

// let m1 = (req,res,next) =>{
//  console.log("this is m1");
// }

//when we need to pass value, we can use function inside a function that has a parameter value and return a function with req,res,and next 
//just use 1 function that has req,res,next when we dont need to pass value

// let deleteUser = (req,res,next)=>{
//     console.log("user deleted");
// }

// let authorizeUser = (value) =>{
//     console.log("i am auth")
//     return (req,res,next) =>{
//         value === "admin"||"superadmin" ? next() : console.log("not authorized")
//     }
// }

//here we used JOI to validate
const userValidation = Joi.object()
.keys({
    //.string() => value must be string and not empty
    
    name:Joi.string().required(), 
    age:Joi.number().required(),
    isMarried:Joi.boolean().required()
}).unknown(true)





userRoute
.route("/")
// .post(authorizeUser("adn"),deleteUser)
// .post(m2(false),m1)
.post(userValidationFun(userValidation),userPost)
.get(userGet)

userRoute
.route("/:id")
.get(userGetSpecific)
.patch(userPatch)
.delete(userDelete)

export default userRoute;
