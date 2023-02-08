const userController = require("../controllers/users.controller");

const express = require("express");
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/user-pofile", userController.userProfile);

module.exports = router;
