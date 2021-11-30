const express = require("express");

const userCtrl = require("../controllers/userName-ctrl");

const router = express.Router();

router.post("/user", userCtrl.addUser);

module.exports = router;
