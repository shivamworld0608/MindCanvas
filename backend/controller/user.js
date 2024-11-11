import User from "../model/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Email is not Registered" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN});

        if (!token) {
            return res.status(500).json({ message: "Failed to generate token" });
        }

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
            secure: process.env.NODE_ENV === "production",
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        });

        res.status(200).json({ message: "Login Successful", user: user });
    } 
    catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        }
    
}

export const logout = (req, res) => {
    res.cookie('token', '', { httpOnly: true, expires: new Date(0), path: '/' });
    res.status(200).json({ message: 'Logged out successfully' });
  }

