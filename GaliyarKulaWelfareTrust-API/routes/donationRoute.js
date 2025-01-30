import express from 'express';
const donationRouter = express.Router();
import { addDonation, deleteDonation, updateDonation, getAllDonations, getDonation } from '../controllers/donationController';

donationRouter.post('/', addDonation);

donationRouter.delete('/', deleteDonation);

donationRouter.put('/', updateDonation);

donationRouter.get('/', getAllDonations);

donationRouter.get('/', getDonation);

export default donationRouter;