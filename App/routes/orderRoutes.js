const express = require("express");
const authCheck = require("../middlewear/authMiddlewear.js");
const { admin } = require("../middlewear/middleweas.js");
const {
  addOrderItems,
  confirmOrder,
  deleteMyOrder,
  deleteOrder,
  getOrderAdmin,
  getOrderById,
  myOrder,
  OrderDataForUser,
  updateOrdered,
  updateOrderToConfirm,
} = require("../controller/orderControl.js");

const router = express.Router();

router.post("/", authCheck, addOrderItems);
router.get("/:id", authCheck, getOrderById);
router.put("/:id/confirm", authCheck, updateOrderToConfirm);
router.post("/myorders", authCheck, myOrder);
router.get("/", authCheck, admin, getOrderAdmin);
router.put("/:id/deliver/pay", authCheck, admin, updateOrdered);
router.get("/:id", authCheck, admin, OrderDataForUser);
router.delete("/:id", authCheck, admin, deleteOrder);
router.delete("/myorders/:id", authCheck, deleteMyOrder);

router.post("/send", authCheck, confirmOrder);

module.exports = router;
