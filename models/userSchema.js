const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
        minlength: [3, "username should be at least 3 characters long."]
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        minlegth: [13, "email should be at least 13 characters long."]
    },

    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [5, "password should at least 5 characters long."]
    }
});

const user = mongoose.model("user", userSchema);

module.exports = user;