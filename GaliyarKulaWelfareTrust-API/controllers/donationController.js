import Donation from '../models/donationSchema.js';

//add new donation
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
        res.status(500).json({ message: 'Server Error' });
    }
};

//delete donation
export const deleteDonation = async (req, res) => {
    const donationId = req.body._id;
    if (!donationId) {
        res.status(400).json({ status: "Failed", message: "Donation not found" });
    }

    try {
        await Donation.findByIdAndDelete(donationId);
        res.status(201).json({ status: "Success", message: "Donation deleted successfully" });
    } catch (error) {
        res.status(500).json({ status: "Failed", message: error.message });
    }
};

//update existing donation
export const updateDonation = async (req, res) => {
    const body = req.body;
    if (!body.name || !body.mobileno) {
        res.status(400).json({ status: 'failed', message: "Failed" });
    }

    try {
        const donation = await Donation.findByIdAndUpdate(req.body._id, req.body);
        res.status(201).json({ status: "Success", message: "Donation updated successfully", data: donation });
    } catch (error) {
        res.status(500).json({ status: "Failed", message: error.message });
    }
};

//get all donations
export const getAllDonations = async (req, res) => {
    try {
        const donations = await Donation.find();
        if (!donations) {
            res.status(400).json({ status: "Failed", message: "Invalid login credentials" });
        }

        res.status(201).json({ status: "Success", data: donations });
    } catch (error) {
        res.status(400).json({ status: "Failed", message: error });
    }
};

//get donation by name
export const getDonation = async (req, res) => {
    const body = req.body;
    if (!body.name) {
        res.status(400).json({ status: 'failed', message: "Failed" });
    }

    try {
        const donations = await Donation.find(req.body);
        res.status(201).json({ status: "Success", message: "Donation retrieved successfully", data: donations });
    } catch (error) {
        res.status(500).json({ status: "Failed", message: error.message });
    }
};