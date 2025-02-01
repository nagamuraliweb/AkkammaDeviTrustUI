import express from 'express';
const donationRouter = express.Router();
import { addDonation, deleteDonation, updateDonation, getAllDonations, getDonation } from '../controllers/donationController.js';

donationRouter.post('/', addDonation);

donationRouter.delete('/:id', deleteDonation);

donationRouter.put('/:id', updateDonation);

donationRouter.get('/', getAllDonations);

donationRouter.get('/', getDonation);

export default donationRouter;