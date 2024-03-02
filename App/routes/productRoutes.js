const express = require("express");
const { admin } = require("../middlewear/middleweas.js");
const authCheck = require("../middlewear/authMiddlewear.js");
const {
  addingComments,
  createProduct,
  deleteProduct,
  deleteSupplierInfoInProduct,
  getProductById,
  getProducts,
  updateProduct,
  updateProductQty,
  updateProductRating,
  UpdateSupplierInfoInProduct,
} = require("../controller/productControl.js");

const router = express.Router();

// fetching all products
router.get("/", getProducts);

// fetching product by id
router.get("/:id", getProductById);
// router.put('/comment/:id', authCheck, addingComments)
router.put("/comment/:id", addingComments);

router.delete("/:id", authCheck, admin, deleteProduct);

router.post("/", authCheck, admin, createProduct);
router.put("/:id", authCheck, admin, updateProduct);
router.put("/delete/supplier/:id", authCheck, admin, deleteSupplierInfoInProduct);
router.put("/update/supplier/:id", authCheck, admin, UpdateSupplierInfoInProduct);
router.put("/qty/:id", authCheck, updateProductQty);
router.post("/rating/:id", authCheck, updateProductRating);

module.exports = router;
