import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import route from './routes/userRoute.js';

dotenv.config();

const app = express();

// Middleware setup
const corsOptions = {
    origin: '*', // specify your frontend's origin
    credentials: true, // allow credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use("/", route);

// Environment variables
const PORT = process.env.PORT || 5000;
const URI = process.env.URI;

console.log('PORT:', PORT);
console.log('URI:', URI);

// MongoDB connection
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
