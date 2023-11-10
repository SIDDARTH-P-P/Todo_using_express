import express from "express";
import rout from "./path.js"

const app = express();

app.use("/",express.json())
app.use("/",rout)
app.use("/",express.static("./templates"));


app.listen(3000,(error)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log("server started");
})