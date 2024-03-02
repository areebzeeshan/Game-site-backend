const express = require("express");
const {
  addToWishlist,
  removeFromWishlist,
  wishlist,
} = require("../controller/wishlistcontroler.js");

const authCheck = require("../middlewear/authMiddlewear.js");

const router = express.Router();

router.post("/wishlist", authCheck, addToWishlist);
router.get("/wishlist", authCheck, wishlist);
router.put("/wishlist/:id", authCheck, removeFromWishlist);

module.exports = router;
