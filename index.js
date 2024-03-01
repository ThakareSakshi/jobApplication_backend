const express = require("express");
const jobRoutes = require("./Routes/JobRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.tpz4c.mongodb.net/`
  )
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log("connection failed", err);
  });
app.use(express.json());
app.use(jobRoutes);

app.listen(5000, () => {
  console.log("server running");
});
