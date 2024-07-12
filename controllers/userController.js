
import { User, Contact } from '../model/userModel.js';

//user registration

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        const newUser = new User({ name, email, password });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error while registering user" });
    }
};

//user login

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(404).json({ msg: "Invalid credentials" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error while logging in" });
    }
};

// contact to the admin

export const contact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newMsg = new Contact({ name, email, message });

        const savedMsg = await newMsg.save();

        res.status(201).json(savedMsg);

    } catch (e) {
        console.log(e)
    }
}

// find all users

export const getUsers = async (req, res) => {
    try {

        const users = await User.find();
        if (users) {
            res.status(201).json(users);
        }
        else {
            res.status(400).json({ msg: "no data found" })
        }
        console.log(users);
    }
    catch (e) {
        console.log(e)
    }
}

//find user by id

export const getById = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const user = await User.findById(id);
        if (user) {
            res.status(201).json(user);
        }
        else {
            res.status(400).json({ msg: "no data found" })
        }
    }
    catch (e) {
        console.log(e)
    }
}
