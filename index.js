import  express  from "express";
import { Port } from "./config.js";

import productRoute from "./routes/product.route.js";

import Product from "./product.model.js";
import mongoose from 'mongoose'
const uri = "mongodb+srv://saad586305:19TtzsOAs34TkdaG@cluster0.t4najou.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Cluster0";

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



 
 
 

 