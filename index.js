require("dotenv").config()
const express=require("express");
const cors=require("cors");


const {connection}=require("./config/db");
const {tripRoute}=require("./routes/trip.route")



const app=express()
app.use(express.json());
app.use(cors());


app.get("/",async(req,res)=>{
    return res.status(200).send({message:`Hello, this is the base endpoint!`})
})

app.use("/",tripRoute)







app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("DB Connected")
    } catch (error) {
        console.log("db is not connected")
        console.log(error.message)
    }

    console.log(`server is running on port ${process.env.port}`)
})