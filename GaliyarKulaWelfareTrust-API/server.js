import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { connectDB } from './config/database.connect.js';
import userRoute from './routes/userRoute.js';
import donationRoute from './routes/donationRoute.js';

const app = express();

dotenv.config();
const port = process.env.port;

// Parses the text as json
app.use(express.json());
app.use(cors());

const __dirname = path.resolve();

//user api path
app.use('/api/login', userRoute);
app.use('/api/getAllUsers', userRoute);

//donation api path
app.use('/api/addDonation', donationRoute);
app.use('/api/deleteDonation', donationRoute);
app.use('/api/updateDonation', donationRoute);
app.use('/api/getAllDonations', donationRoute);
app.use('/api/getDonation', donationRoute);

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
