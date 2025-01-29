import Donation from '../models/donationSchema';

//Add new donation
export const addDonation = async (req, res) => {
    const body = req.body;
    if (!body.name || !body.mobileno) {
        res.status(400).json({ status: 'failed', message: "Failed" });
    }

    try {
        const donation = new Donation(body);
        await Donation.save(donation);
        res.status(201).json({ status: 'Success', message: "Success", data: donation });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}