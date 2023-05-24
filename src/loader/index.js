const express = require("express");
const router = express.Router();
const meetRouter = require("../routes/index");
const bodyparser = require("body-parser");



router.use(bodyparser.json());

router.use("/meetup", meetRouter);//



module.exports = router;