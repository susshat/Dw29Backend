import express, { json } from "express";
import firstRoute from "./src/route/firstRoute.js";//always rember to add the extention at the end of the file 
import addressRoute from "./src/route/addressRoute.js";
import adminRoute from "./src/route/adminRoute.js";
import country from "./src/route/countryRoute.js";

const app = express(); // here we created an express application or a backend application
let port = 8000; 
app.listen(port, ()=>{ console.log(`app is running in ${port}`)});// here we made a port for our backend application

//makes out system capabe to take json data 
//always place at top level
app.use(json());

/* make api 
make route, and "use" that route to index.js */

app.use(firstRoute);
app.use("/address",addressRoute);
app.use("/admin",adminRoute);
app.use("/country",country)


/*
localhost: 8000, post =>a 
localhost: 8000, get =>b
localhost: 8000, patch =>c
localhost: 8000, delete =>d 

*/