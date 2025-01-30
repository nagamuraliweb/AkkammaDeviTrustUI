import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { connectDB } from './config/database.connect.js';
import userRouter from './routes/userRoute.js';
import donationRouter from './routes/donationRoute.js';

const app = express();

dotenv.config();
const port = process.env.port;

// Parses the text as json
app.use(express.json());
app.use(cors());

const __dirname = path.resolve();

//user api path
app.use('/api/login', userRouter);
app.use('/api/getAllUsers', userRouter);

//donation api path
app.use('/api/addDonation', donationRouter);
app.use('/api/deleteDonation', donationRouter);
app.use('/api/updateDonation', donationRouter);
app.use('/api/getAllDonations', donationRouter);
app.use('/api/getDonation', donationRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')));

    // re-direct to frontend
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(port, function () {
    connectDB();
    console.log("Server is listening at port:" + port);
});
