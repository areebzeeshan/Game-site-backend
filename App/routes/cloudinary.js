const express = require("express");
const { Removes, Uploads } = require("../controller/cloudinaryControler.js");
const authCheck = require("../middlewear/authMiddlewear.js");

const router = express.Router();

router.post("/uploadimages", authCheck, Uploads);
router.put("/removeimage", authCheck, Removes);

module.exports = router;
