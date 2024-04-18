const express = require("express");
const {
  authenticateUser,
  registerUser,
} = require("../controllers/usercontroller");

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authenticateUser);

module.exports = router;
