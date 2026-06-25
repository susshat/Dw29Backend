import { Router } from "express";

const addressRoute = Router()

addressRoute
.route("/")
.post((req,res,next)=>{
    res.json({
        sucess:true,
        message: "address created successfully"
    })
})
.get((req,res,next)=>{
    res.json({
sucess:true,
message: "address read successfully"
    })
})

addressRoute
.route("/:id")
.get((req,res,next)=>{
res.json({
    sucess: true,
    message:"address read successfully"
})
})
.patch((req,res,next)=>{
res.json({
    sucess: true,
    message:"address updated successfully"})
})
.delete((req,res,next)=>{
res.json({
    sucess: true,
    message:"address deleted successfully"
})
})

export default addressRoute;