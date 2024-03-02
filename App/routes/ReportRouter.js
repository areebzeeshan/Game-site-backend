const express = require("express");
const { admin } = require("../middlewear/middleweas.js");
const authCheck = require("../middlewear/authMiddlewear.js");
const {
  AddingReports,
  deleteReport,
  getReportById,
  getReports,
  updateReport,
} = require("../controller/ReportControler.js");

const router = express.Router();

// fetching all products
router.get("/", getReports);
router.get("/:id", getReportById);
router.post("/", authCheck, AddingReports);
router.put("/:id", authCheck, admin, updateReport);
router.delete("/:id", authCheck, admin, deleteReport);

module.exports = router;
