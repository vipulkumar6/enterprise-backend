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

const User = mongoose.model('User', userSchema);

export default User;