import { Schema } from "mongoose";

const userSchema = Schema({
    name:{
        type:String,
        required: [true,"name is required"],
        //data manipulation
        lowercase:true,
        trim:true,
        //validation
        minlength:[3,"must be at least 3 letters"],
        maxlength:[20,"must be at least 20 characters long"],
        
    },
    email:{
        type:String,
        required: [true,"email is required"],
        validate:(value)=>{
            //here we used regex to validate the password created with the help of chat gpt 
            //it should be wrapped inside slash and should be in one line 
            if(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)){

            }else{
                throw new Error("pw must include lower case, upper case,and special characters")
            }
        }
    },
    password:{
        type:String,
        required:[true,"password is required"],
        validate:(value)=>{
            //here we used regex to validate the password created with the help of chat gpt 
            //it should be wrapped inside slash and should be in one line 
            if(/^(?=.*[a-z])(?=.*[A-Z])/.test(value)){

            }else{
                throw new Error("pw must include lower case, upper case,and special characters")
            }
        }
        
    },
     gender:{
        type:String,
        default:"male",//manipulation here we added adefault value for gender as "male"

        //custom validation
        validate:(value)=>{
            if(value === "male"||value === "female"|| value === "other"){

            }else{
                throw new Error("gender can be either male/female/other only")
            }
        }
    },
    phoneNumber:{
        type:String,
        required: [true,"Phonenumber is required"],
        maxlength:[10,"must be at exact 10 chara"],
        maxlength:[10,"must be at exact 10 chara"],
        validate:(value)=>{
            if(value.startsWith("98")||value.startsWith("97")){

            }else{
                throw new Error("phNumber must start from 98/97 only")
            }
        }

    },
   roll:{
        type:Number,
        required:[true,"roll is required"],
        
        min:[0,"min 0"],
        max:[100,"max 100"],
    },
    isMarried:{
        type:Boolean,
        required:[true,"it is required"],
    },
    dob:{
        type:Date,
        required:[true,"dob is required"],
    },
    location:{
        country:{
            type:String,
            required:[true,"country is required"],
        },
        exactLocation:{
             type:String,
            required:[true,"exactLocation is required"],
        }
    },
    favTeacher:[
        {
             type:String,
            required:[true,"Fav teacher is required"],
        }
    ],
    favSubject:[

        //in case of array of strings we only need to define once 
        {
            bookName: {
             type:String,
            required:[true,"Fav teacher is required"],
        },
            bookAuthor:{
                 type:String,
            required:[true,"Fav teacher is required"],
            }
    },]
},
{
    timestamps: true,
    //this changes the _id key in just id and remmoves unnecessary keys
    toJSON:{
        transform:(doc,ret)=>{
            ret.id=ret._id;
            delete ret._id;
            delete ret.__v;       
         },
    }
});

export default userSchema;