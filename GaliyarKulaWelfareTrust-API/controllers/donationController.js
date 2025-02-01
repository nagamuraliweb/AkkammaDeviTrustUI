import Donation from '../models/donationSchema.js';

//add new donation
export const addDonation = async (req, res) => {
    const body = req.body;
    if (!body.name || !body.mobileno) {
        return res.status(400).json({ status: 'failed', message: "Fill all the details" });
    }
    try {
        const donation = new Donation(body);
        await donation.save();
        res.status(201).json({ status: 'Success', message: "Success", data: donation });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

//delete donation
export const deleteDonation = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ status: "Failed", message: "Donation not found" });
    }

    try {
        await Donation.findByIdAndDelete(id);
        res.status(201).json({ status: "Success", message: "Donation deleted successfully" });
    } catch (error) {
        res.status(500).json({ status: "Failed", message: error.message });
    }
};

//update existing donation
export const updateDonation = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    if (!body.name || !body.mobileno) {
        res.status(400).json({ status: 'failed', message: "Failed" });
    }

    try {
        const donation = await Donation.findByIdAndUpdate(id, body, {new: true});
        res.status(201).json({ status: "Success", message: "Donation updated successfully", data: donation });
    } catch (error) {
        res.status(500).json({ status: "Failed", message: error.message });
    }
};

//get all donations
export const getAllDonations = async (req, res) => {
    try {
        const donations = await Donation.find().sort({ updatedAt: -1 });
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
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ status: 'failed', message: "Failed" });
    }

    try {
        const donations = await Donation.findOne({_id: id});
        res.status(201).json({ status: "Success", message: "Donation retrieved successfully", data: donations });
    } catch (error) {
        res.status(500).json({ status: "Failed", message: error.message });
    }
};