const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    name: { type: String },
    rating: { type: Number },
    comment: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const commentSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  text: { type: String },
  name: { type: String },
  date: { type: Date, default: Date.now },
});

const productSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    name: { type: String },
    category: { type: String },
    categoryName: { type: String },
    description: { type: String },

    supplier: { type: String },
    supplierName: { type: String },
    totalPay: { type: Number },
    givePay: { type: Number },

    reviews: [reviewSchema],
    comments: [commentSchema],

    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    countInStock: { type: Number, default: 0 },
    shipping: {
      type: String,
      enum: ["Yes", "No"],
    },
    brand: {
      type: String,
    },
    brandName: { type: String },

    images: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports =  Product;
