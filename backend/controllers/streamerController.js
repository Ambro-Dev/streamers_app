const Streamer = require("../models/Streamer");

const getStreamers = async (req, res) => {
  const streamers = await Streamer.find({}).exec();

  if (!streamers)
    return res.status(204).json({ message: "No streamers found" });
  const response = streamers.map((streamer) => {
    return {
      id: streamer._id,
      name: streamer.name,
      platform: streamer.platform,
      description: streamer.description,
      image: streamer.image || undefined,
      votes_up: streamer.votes_up,
      votes_down: streamer.votes_down,
    };
  });
  res.json(response);
};

const getStreamer = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "Streamer ID required" });
  const streamer = await Streamer.findOne({ _id: req.params.id }).exec();
  if (!streamer) {
    return res
      .status(204)
      .json({ message: `Streamer ID ${req.params.id} not found` });
  }
  res.json(streamer);
};

const createStreamer = async (req, res) => {
  const { name, platform, description, image } = req.body;
  if (!name || !platform || !description)
    return res.status(400).json({ message: "Streamer data missing" });
  const newStreamer = new Streamer({
    name,
    platform,
    description,
    image,
  });
  await newStreamer.save();
  res.json(newStreamer);
};

const updateStreamer = async (req, res) => {
  const { name, platform, description, image } = req.body;
  if (!name || !platform || !description)
    return res.status(400).json({ message: "Streamer data missing" });
  const streamer = await Streamer.findOne({ _id: req.params.id }).exec();
  if (!streamer) {
    return res
      .status(204)
      .json({ message: `Streamer ID ${req.params.id} not found` });
  }
  streamer.name = name;
  streamer.platform = platform;
  streamer.description = description;
  streamer.image = image;
  await streamer.save();
  res.json(streamer);
};

module.exports = { getStreamers, getStreamer, createStreamer, updateStreamer };
