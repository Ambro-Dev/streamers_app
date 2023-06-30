const Platform = require("../models/Platform");

const getPlatforms = async (req, res) => {
  const platforms = await Platform.find({}).exec();
  if (!platforms)
    return res.status(204).json({ message: "No platforms found" });

  const response = platforms.map((platform) => {
    return {
      id: platform._id,
      name: platform.name,
      image: platform.image,
    };
  });
  res.json(response);
};

const createPlatform = async (req, res) => {
  const { name, image } = req.body;
  const newPlatform = new Platform({ name, image });
  const savedPlatform = await newPlatform.save();
  if (!savedPlatform)
    return res.status(500).json({ message: "Platform could not be saved" }); // 500 Internal Server Error
  res.json(savedPlatform);
};

module.exports = { getPlatforms, createPlatform };
