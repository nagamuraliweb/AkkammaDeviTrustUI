import User from '../models/userSchema.js';

//check user exist
export const login = async (req, res) => {
    const body = req.body;
    if (!body.username || !body.password) {
        res.status(400).json({ status: "Failed", message: "Please enter all credentials" });
    }

    try {
        const user = await User.findOne({ username: body.username, password: body.password });
        if (!user) {
            res.status(400).json({ status: "Failed", message: "Invalid login credentials" });
        }

        res.status(201).json({ status: "Success", data: user });
    } catch (error) {
        res.status(400).json({ status: "Failed", message: error });
    }
};

//get all users
export const getAllUers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users) {
            res.status(400).json({ status: "Failed", message: "Invalid login credentials" });
        }

        res.status(201).json({ status: "Success", data: users });
    } catch (error) {
        res.status(400).json({ status: "Failed", message: error });
    }
};
