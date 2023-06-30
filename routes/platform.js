const router = require("express").Router();
const platformController = require("../controllers/platformController");

router.route("/").get(platformController.getPlatforms);

router.route("/add").post(platformController.createPlatform);

module.exports = router;
