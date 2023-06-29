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

  const response = {
    id: streamer._id,
    name: streamer.name,
    platform: streamer.platform,
    description: streamer.description,
    image: streamer.image || undefined,
    votes_up: streamer.votes_up,
    votes_down: streamer.votes_down,
  };
  res.json(response);
};

const createStreamer = async (req, res) => {
  const { name, platform, description, image, votes_down, votes_up } = req.body;
  if (!name || !platform || !description)
    return res.status(400).json({ message: "Streamer data missing" });
  const newStreamer = new Streamer({
    name,
    platform,
    description,
    image,
    votes_up,
    votes_down,
  });
  await newStreamer.save();
  res.json(newStreamer);
};

const updateStreamer = async (req, res) => {
  const { name, platform, description, image, votes_down, votes_up } = req.body;
  console.log(req.body.votes_up);
  if (
    !(!name || !platform || !description || !image || !votes_down || !votes_up)
  )
    return res.status(400).json({ message: "Streamer data missing" });

  const streamer = await Streamer.findOne({ _id: req.params.id }).exec();
  console.log(streamer);
  if (!streamer) {
    return res
      .status(204)
      .json({ message: `Streamer ID ${req.params.id} not found` });
  }
  if (votes_down < streamer.votes_down || votes_up < streamer.votes_up)
    return res
      .status(400)
      .json({ message: "Votes can't be lower than present one" });
  if (name) streamer.name = name;
  if (platform) streamer.platform = platform;
  if (description) streamer.description = description;
  if (image) streamer.image = image;
  if (votes_down) streamer.votes_down = votes_down;
  if (votes_up) streamer.votes_up = votes_up;
  await streamer.save();
  res.json(streamer);
};

module.exports = { getStreamers, getStreamer, createStreamer, updateStreamer };
