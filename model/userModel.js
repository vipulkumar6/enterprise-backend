import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    confirmPass: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
});

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
});

const User = mongoose.model('User', userSchema);
const Contact = mongoose.model('contact', contactSchema);

export { User, Contact };