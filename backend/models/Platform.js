const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const platformSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Platform = mongoose.model("Platform", platformSchema);

module.exports = Platform;
