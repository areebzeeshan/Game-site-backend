const express = require("express");
const {
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
} = require("../controller/userControler.js");
const authCheck = require("../middlewear/authMiddlewear.js");
const { admin } = require("../middlewear/middleweas.js");

const router = express.Router();

// admin can does this
router.put("/:id", authCheck, updateUser);
router.get("/:id", authCheck, admin, getUserById);
router.get("/", authCheck, admin, getAllUser);

// user admin can delete users
router.delete("/:id", authCheck, admin, deleteUser);

module.exports = router;
