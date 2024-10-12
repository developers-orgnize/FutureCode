const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String, // Missing type definition for name
            required: [true, "Please enter product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timestamps: true // Corrected "Timestamp" to "timestamps"
    }
);

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
