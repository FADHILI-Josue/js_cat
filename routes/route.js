const express = require("express");
const router = express.Router();
const {add,multiply }= require("../controllers/controller")

router.post("/add", add);

router.post("/mult", multiply);

module.exports = router