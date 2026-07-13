 //here we created a function within a function that "returns" that function
 //  because we need to pass a value(JOI validation) to the function that is done in route
const userValidationFun = (userValidation) => {
    return (req,res,next)=>{
    //here we validate the oncomming value from the response body
let data = userValidation.validate(req.body);

//If validation fails, error contains details about what went wrong.
//If validation succeeds, error is undefined.
let error = data.error;
//here we checked the specific message of error, 
//so we can get the specific error when hitting post method
// console.log(error.details[0].message);

//condition for access to middleware
if (error){
    res.json({
        success:true,
        //we added the specifi message here in the response of the body
        message:error.details[0].message,
    })
}else{
    next();
}
}
}

export default userValidationFun;