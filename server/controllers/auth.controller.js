import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import userModel from '../models/user.model.js'

export const signup = async (req, res) => {
    try {
        const { name, phoneNo, password } = req.body;

        if (!name || !phoneNo || !password) {
            return res
                .status(400)
                .json({ success: false, message: "All fields are required" });
        }

        const isUserExist = await userModel.findOne({ phoneNo });

        if (isUserExist) {
            return res
                .status(400)
                .json({ success: false, message: "User already exist" });
        }

        const { nanoid } = await import("nanoid");

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({
            id: nanoid(6),
            name,
            phoneNo,
            password: hashedPassword,
        });

        await newUser.save();

        return res.status(201).json({
            success: true,
            message: "User created successfully",
        });

    } catch (error) {
        console.log("Error in signup", error);
        return res.status(500).json({
            success: false,
            message: "Error in signup",
        });
    }
};

export const signin = async (req, res) => {
    try {
        const { phoneNo, password } = req.body;

        if (!phoneNo || !password) {
            return res
                .status(400)
                .json({ success: false, message: "All fields are required" });
        }

        const user = await userModel.findOne({ phoneNo });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(400).json({
                success: false,
                message: "Invalid password",
            });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: "24h",
        });

        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            token,
        });

    } catch (error) {
        console.log("Error while login user", error);
        return res.status(500).json({
            success: false,
            message: "Error while login user",
        });
    }
};