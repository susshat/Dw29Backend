import { School } from "../schema/model.js";

export const schoolPost = async (req,res,next) =>{
    const result = await School.create(req.body);
    res.status(201).json({
         sucess:true,
        message: "School created successfully",
        result:result
    })
}

export const schoolGet = async(req,res,next)=>{
    // const result = await School.find({});
    // const result = await School.find({name:"rojaa"})
    // const result = await School.find({name:"rojaa"}).select("name email")


    //here we adding the value sent from the url 
    const result = await School.find(req.query);
    console.log(result);

    res.status(200).json({
            sucess:true,
        message: "School read successfully",
        result:result
    })
}

export const schoolGetSpecific = async (req,res,next)=>{
    const result = await School.findById(req.params.id)
     res.status(200).json({
            sucess:true,
            message: "School read specifically",
            result:result
    })
}

export const schoolPatch = async (req,res,next)=>{
    const result = await School.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).json({
            sucess:true,
        message: "School updated successfully",
        result:result
    })
}

export const schoolDelete = async(req,res,next)=>{
    const result = await School.findByIdAndDelete(req.params.id);
      res.status(200).json({
            sucess:true,
        message: "School deleted successfully",
        result:result
    })
}