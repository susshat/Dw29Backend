import { User } from "../schema/model.js"



export const userPost = async (req,res,next)=>{
    const result = await User.create(req.body);
        res.json({
        sucess:true,
        message: "User created successfully",
        result:result
    })
}

export const userGet = async (req,res,next)=>{
    const result = await User.find({})
    res.json({
sucess:true,
message: "User read successfully",
result:result
    })
}

export const userGetSpecific = async (req,res,next)=>{
    const result = await User.findById(req.params.id)
res.json({
    sucess: true,
    message:"User read successfully",
    result:result
})
}

export const userPatch = async (req,res,next)=>{
    const result = await User.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
res.json({
    sucess: true,
    message:"User updated successfully",
    result:result
})
}

export const userDelete = async (req,res,next)=>{
    const result = await User.findByIdAndDelete(req.params.id)
res.json({
    sucess: true,
    message:"User deleted successfully",
    result:result
})
}
