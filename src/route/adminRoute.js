import { Router } from "express";

const adminRoute = Router()

adminRoute
.route("/")
.post((req,res,nex)=>{
res.json(
    {
        sucess:true,
        message:"admin created successfully"
    }
)
})
.get((req,res,nex)=>{
res.json(
    {
        sucess:true,
        message:"all admin read successfully"
    }
)
})

adminRoute
.route("/:id")
.get((req,res,next)=>{
    res.json({
        sucess:true,
        message: "specific admin read successfully"
    })
})
.patch((req,res,next)=>{
    res.json({
        sucess:true,
        message: "admin updated successfully"
    })
})
.delete((req,res,next)=>{
    res.json({
        sucess:true,
        message: "admin deleted successfully"
    })
})

export default adminRoute;