const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        user_name: {
            type: String, // Missing type definition for name
            required: [true, "Please enter product name"]
        },
        email: {
            type: String,
            required: true,
            default: 0
        },
        password: {
            type: String,
            required: [true, "Please enter product name"]
        }
    },
    {
        timestamps: true // Corrected "Timestamp" to "timestamps"
    }
);

const user = mongoose.model("User", UserSchema);
module.exports = user;
