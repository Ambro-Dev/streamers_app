const express = require("express");
const cors = require("cors");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const corsOptions = require("./config/corsOptions");
const http = require("http");
const path = require("path");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const server = http.createServer(app);

connectDB();

app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

//static files
app.use("/", express.static(path.join(__dirname, "/public")));

//routes
app.use("/streamers", require("./routes/streamer"));
app.use("/platforms", require("./routes/platform"));

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
  server.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port: ${process.env.PORT || 5000}`);
  });
});
