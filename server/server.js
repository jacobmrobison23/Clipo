import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import connectMongoDB from './config/connection.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json()); // to parse req.body
app.use(express.urlencoded({ extended: true })); // to parse form data

app.use(cookieParser()); // to parse cookies

app.use("/api/auth", authRoutes); // to use auth routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});
