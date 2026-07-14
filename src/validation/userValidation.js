import Joi from "joi";

//here we used JOI to validate
const userValidation = Joi.object()
.keys({


    //.string() => value must be string and not empty
    //to allow empty just add .allow("")
    
    name:Joi.string().required().min(3).max(20).messages({
        "any.required":"Name is required.", //custom message for required
        "string.base":"Field must be String",
        "string.min":"Field must be at least 3 characters",
        "string.max":"Field must be less than 20 characters",
    }), 



    age:Joi.number()//if we send number in form of string it will take number
    .required()
    .custom((value,msg)=>{
        // if(value >= 18){
            //     return true
            // }else{
                //     return msg.message("age must be al least 18")
                // }
                return value >= 18 && value <=69 ? true: msg.message("must be greater or equal to 18")
    }),

    isMarried:Joi.boolean().required(),

    //here we used '.when' to make spouse required only when isMarried value is true 
    spouse:Joi.when("isMarried",{
        is:true,
        then:Joi.string().required(),
        otherwise:Joi.string()

    }),
    gender:Joi.string().valid("male", "female","other")
    .messages({//here we are giving custom messages for error
        "string.base":"Gender must be string.",
       "any.required":"Gender is required.",
        "any.only":"Gender must be male, female or other.",
    }),


    email:Joi.string().required()
    .custom((value,msg)=>{

const validEmail = value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/);

return validEmail ? true : msg.message("Invalid Email")
    }),



    password:Joi.string().required()
    .custom((value,mes)=>{
          //here we used regex to validate the password created with the help of chat gpt 
             //it should be wrapped inside slash and should be in one line 
        let validPassword = value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/);

    return validPassword ? true: msg.message("At least 8 characters, one uppercase, one lowercase, one number, one special character")
    }),
    phoneNumber:Joi.number().required(),
    roll:Joi.number().required(),
  
    dob:Joi.string().required(),

    //to define object in Joi validation
    location:Joi.object().keys({
        country:Joi.string().required(),
        exactLocation:Joi.string().required(),

    }),


    //to define arrya,we only need to give type of one value
    favTeacher:Joi.array().items(Joi.string().required()),

    //to define array of objects
    favSubject:Joi.array()
        .items(Joi.object().keys({
            bookName:Joi.string().required(),
            bookAuthor:Joi.string().required(),
    }))
    
}).unknown(false)//true/false lets unknown keys and value to be sent/unsent from frontend/postman

export default userValidation;