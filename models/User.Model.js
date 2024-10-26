const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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


// Hash the password before saving to the database
UserSchema.pre("save", async function (next) {
    const user = this;
  
    // Only hash the password if it has been modified (or is new)
    if (!user.isModified("password")) return next();
  
    try {
      // Generate a salt and hash the password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      next();
    } catch (error) {
      next(error);
    }
  });

const user = mongoose.model("User", UserSchema);
module.exports = user;
