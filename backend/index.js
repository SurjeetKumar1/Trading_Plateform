require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const {HoldingsModel}=require("./model/holdingsModel.js");
const {PostionsModel}=require("./model/positionsModel.js")
const {OrderModel}=require("./model/ordersModel.js")
const cors = require('cors');
const bodyParser = require("body-parser");
// const bodyParser=require("body-parser");

const PORT=process.env.PORT || 3002;
const DB_URL=process.env.MONGO_URL;

const app=express();
app.use(cors());  //cors is s middleware
app.use(bodyParser.json())

async function main(){
    await mongoose.connect(DB_URL)
}

main().then(()=>{
    console.log("Db connection is sucessfull");
}).catch(()=>{
    console.log("DB connection failed")
})


app.get("/holdings",async(req,res)=>{
    let holdingData=await HoldingsModel.find();
    res.json(holdingData);
})


app.get("/positions",async(req,res)=>{
    let positionData=await PostionsModel.find();
    res.json(positionData);
})

app.post("/order",async(req,res)=>{
    const {name,qty,price,mode}=req.body;
    let newOrder=new OrderModel({name,qty,price,mode});
    await newOrder.save().then((res)=>{
        res.send("order save");
    }).catch((err)=>{
        res.send("Error in order route",err);
    })
})


app.listen(PORT,()=>{
    console.log("server is listing");
})