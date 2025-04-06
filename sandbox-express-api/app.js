const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// map all routes to the express app
const authRoutes = require("./routes/authRoutes");

app.use(express.json());
app.use("/auth", authRoutes);

// export the app
module.exports = app;
