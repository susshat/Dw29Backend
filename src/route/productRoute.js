import { Router } from "express";
import { Product } from "../schema/model.js";

const productRoute = Router()


productRoute
.route("/")
.post(async (req,res,next)=>{// await requires a async its syntax
  //console.log(req.body)
  //here we created a table for product to keep thte data we send form postman 
  const result = await Product.create(req.body); //we use await to run this code in this line 

  res.json({
    sucess: true,
    message:"Product created successfully",
    result:result
  })
})
.get(async (req,res,next)=>{
    const result = await Product.find({})
    res.json({
        sucess: true,
        message:"Product read successfully",
        result:result
    })

})

productRoute
.route("/:id")
.get(async (req,res,next)=>{
    //here the findById is a predefined method
    const result = await Product.findById(req.params.id)
    res.json({
    sucess:true,
    message:"Specific Product read successfully",
    result:result,
    })
})
.patch(async(req,res,next)=>{                        //specific-id  //new-data(updated sent from postman)
    const result = await Product.findByIdAndUpdate(req.params.id,req.body,{
        //new:true shows the updated data 
        new:true
    })
    res.json({
        sucess:true,
        message:"Product updated successfully",
        result:result,
    })
})
.delete(async(req,res,next)=>{
    const result = await Product.findByIdAndDelete(req.params.id)
    res.json({
        sucess:true,
        message:"Product deleted successfully",
        result:result,
    })
})

export default productRoute;