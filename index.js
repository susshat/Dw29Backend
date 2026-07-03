import express, { json } from "express";
import firstRoute from "./src/route/firstRoute.js";//always rember to add the extention at the end of the file 
import addressRoute from "./src/route/addressRoute.js";
import adminRoute from "./src/route/adminRoute.js";
import country from "./src/route/countryRoute.js";
import errorMessage from "./src/middleware/errorMessage.js";
import pageNotFound from "./src/middleware/pageNotFound.js";
import connectToMongoDb from "./src/connectToDb/connectToMongoDb.js";
import productRoute from "./src/route/productRoute.js";
import userRoute from "./src/route/userRoute.js";
import schoolRoute from "./src/route/schoolRoute.js";

const app = express(); // here we created an express application or a backend application
let port = 8000; 
// here we made a port for our backend application
app.listen(port, ()=>{
    console.log(`app is running in ${port}`)});
    connectToMongoDb();

//makes out system capabe to take json data 
//always place at top level
app.use(json());


/* make api 
make route, and "use" that route to index.js */

app.use(firstRoute);
app.use("/address",addressRoute);
app.use("/admin",adminRoute);
app.use("/country",country);
app.use("/product",productRoute);
app.use("/user",userRoute);
app.use("/school",schoolRoute);


app.use("",pageNotFound)

//makeing A globle error middleware
//always place it at the last
app.use(errorMessage)


/*
localhost: 8000, post =>a 
localhost: 8000, get =>b
localhost: 8000, patch =>c
localhost: 8000, delete =>d 

*/