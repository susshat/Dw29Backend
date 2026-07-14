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
    //  const result = await School.find(req.query)


    //here we destructured the querry values and use them with find() like so below

    //localhost:8000/school?sort=name&select=name email&limit=2&skip=1&name=rojuu
    //keep in mind if when you use skip if you have only one data it will show empty array
    const {sort,select,limit,skip,...query}  = req.query;



    const result = await School.find(query)
    .sort(sort)
    .select(select)
    .limit(limit)
    .skip(skip);

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