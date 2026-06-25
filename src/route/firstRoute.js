//creating a route

import { Router } from "express";

const firstRoute = Router();

//here we created routes
firstRoute
.route("/")
.post((req,res,next)=>{console.log("a")

    //this is how we request the data sent in the body
    console.log(req.body);
    
})
.get((req,res,next) =>{
    console.log(req.query);
    console.log("b")})
.patch((req,res,next) =>{
    
    console.log("this is patch request")
  
  
    //here we printed in postman
res.json({
    sucess: true,
    message:"updated sucessfully"
})



})
.delete((req,res,next) =>{console.log("d")})


//here we requested from a different specific route
firstRoute
.route("/name")
.get((req,res,next) =>{console.log("name b")})
.post((req,res,next)=>{console.log("name a")})


//here we creating a dynamic route

firstRoute
.route("/name/:id")
.get((req,res,next) =>{

    //here we requested the dynamic value with the help of req.params
    console.log(req.params);


    console.log("static output")})


export default firstRoute;


/*
localhost: 8000, post =>a 
localhost: 8000, get =>b
localhost: 8000, patch =>c
localhost: 8000, delete =>d 

*/