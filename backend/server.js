import express from "express";
import dotenv from "dotenv";

 const app = express();

 dotenv.config();

 const PORT = process.env.PORT || 5700;
 
 app.get("/", (req, res)=>{
  //root route 
  res.send("Server is ready!!");
 });

 app.get("/api/auth/signup", (req,res)=>{
  console.log("singup route");
 })

 app.get("/api/auth/login", (req,res)=>{
  console.log("login route");
 })

 app.get("/api/auth/logout", (req,res)=>{
  console.log("logout route");
 })

 app.listen(PORT, ()=> console.log(`Server is Running on Port ${PORT}`));