import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

 const app = express();

 dotenv.config();

 const PORT = process.env.PORT || 5700;
 
 app.get("/", (req, res)=>{
  //root route 
  res.send("Server is ready!!");
 });

app.use("/api/auth", authRoutes)

 app.listen(PORT, ()=> console.log(`Server is Running on Port ${PORT}`));