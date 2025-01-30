import express from 'express';
const router = express.Router();

import { addDonation, deleteDonation, updateDonation, getAllDonations, getDonation } from '../controllers/donationController';

router.post('/', addDonation);

router.delete('/', deleteDonation);

router.put('/', updateDonation);

router.get('/', getAllDonations);

router.get('/', getDonation);

export default router;