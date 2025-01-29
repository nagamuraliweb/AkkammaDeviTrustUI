import mongoose from "mongoose";

const DonationSchema = new mongoose.Schema({
    date: { type: String, required: true },
    name: { type: String, required: true },
    mobileno: { type: Number, required: true },
    address: { type: String, required: true },
    pincode: { type: Number, required: true },
    paymenttowards: { type: String, required: true },
    month: { type: String, required: false },
    amount: { type: Number, required: true },
    paymenttype: { type: String, required: true },
    utrno: { type: Number, required: false }
}, {
    timestamps: true //createdAt, updatedAt
});

const Donation = mongoose.model('donations', DonationSchema);
export default Donation;