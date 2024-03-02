const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, required: true, index: true, unique: true },
    isAdmin: { type: Boolean, default: true },
    address: String,
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    password: { type: String, required: true },
  },

  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
