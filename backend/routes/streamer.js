const router = require("express").Router();
const streamerController = require("../controllers/streamerController");

router.route("/").get(streamerController.getStreamers);

router.route("/add").post(streamerController.createStreamer);

router.route("/:id").get(streamerController.getStreamer);

router.route("/:id").put(streamerController.updateStreamer);

module.exports = router;
