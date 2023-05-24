const express = require("express");
const meetupController = require("../controllers/index");
const validate = require('../middleware/index');
const meetScheme = require('../schemas/index');

const router = express.Router();


router.post('/', validate(meetScheme.createmeetScheme), meetupController.createmeetup);


router.get("/", meetupController.getAll)


router.get("/:id", meetupController.getOne)


router.put("/:id", validate(meetScheme.updatemeetScheme), meetupController.updatemeetup);


router.delete("/:id", meetupController.deletemeetup);


module.exports = router;