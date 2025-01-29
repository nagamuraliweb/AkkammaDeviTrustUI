import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: false },
    mobileno: { type: Number, required: false }
}, {
    timestamps: true //createdAt, updatedAt
});

const User = mongoose.model('users', UserSchema);

export default User;