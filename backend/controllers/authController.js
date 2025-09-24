import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
export const signup = async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: "Name, Email & Password are reuired" })
    }

    const existingUser = await User.findOne({ email });
    if (existingUser)
        return res.status(409).json({ success: false, message: "User already exists" })

    const newUser = await User.create({ name, email, password });
    const token = jwt.sign({ id: newUser._id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '5d' })
    res.cookie('token', token, 
    {httpOnly: true,
    sameSite: 'lax',
    secure: false,
    maxAge: 5 * 24 * 60 * 60 * 1000
    }).json({ success: true, message: "New User Created" })
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email & Password are required" });
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid password" });
        }
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '5d' });
        res.cookie('token', token,
            {
                httpOnly: true,
                sameSite: 'lax',
                secure: false,
                maxAge: 5 * 24 * 60 * 60 * 1000
            }).json({ success: true, message: "login successfull" })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}