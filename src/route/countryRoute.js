import { Router } from "express";

const country = Router()


country
.route("/")
.post((req,res,next)=>{
    res.json({
        sucess:true,
        message:"country created successfully"
    })
})
.get((req,res,next)=>{
    res.json({
        sucess:true,
        message:"country read successfully"
    })
})


country
.route("/:id")
.get((req,res,next)=>{
    res.json({
        sucess:true,
        message:"country read successfully"
    })
})
.patch((req,res,next)=>{
    res.json({
        sucess:true,
        message:"country updated successfully"
    })
})
.delete((req,res,next)=>{
    res.json({
        sucess:true,
        message:"country deleted successfully"
    })
})


export default country;