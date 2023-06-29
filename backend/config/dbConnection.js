const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      dbName: process.env.DB_NAME,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
