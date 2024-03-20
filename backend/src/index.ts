import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";

// connect the DB
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

// routing
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// app listening
app.listen(7000, () => {
    console.log("App is running on localhost:7000");
});