import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import cors from "cors";
import router from "./routes/index.js";
import profileRoutes from "./routes/index.js";
import Users from "./models/UserModel.js";
import Profile from "./models/ProfileModel.js";
dotenv.config();
const app = express();

try{
    await db.authenticate();
    console.log('Database Conected...');
    await Users.sync();
    await Profile.sync();
}catch (error){
    console.error(error);
}

app.use(cors({ credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use('/profile', profileRoutes);

app.listen(5000, ()=> console.log('Server running at port 5000'));
