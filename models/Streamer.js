const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const streamerSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    platform: {
      type: String,
      require: true,
      ref: "Platform",
    },
    description: {
      type: String,
      require: true,
    },
    image: {
      type: String,
    },
    votes_up: { type: Number, default: 0 },
    votes_down: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Streamer = mongoose.model("Streamer", streamerSchema);

module.exports = Streamer;
