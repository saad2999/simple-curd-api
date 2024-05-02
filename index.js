import  express  from "express";
import { Port } from "./config.js";

import productRoute from "./routes/product.route.js";

import Product from "./product.model.js";
import mongoose from 'mongoose'
const uri = "";

const app = express();
app.use(express.json())


app.use("/api/products", productRoute);


mongoose.connect(uri)
  .then(() => {console.log('Connected!');
  app.listen(Port,()=>{
    console.log(`server is running on port ${Port} `)
});
}).catch(()=>{
    console.log('Not Connected!');
});









app.get('/',(req,res)=>{

    res.send("hello world")

});



 
 
 

 
