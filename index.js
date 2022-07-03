const express = require("express");
const router = require("./router/router");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

require("dotenv").config();

app.use(cookieParser());
app.use(express.json());
app.use(morgan("common"));
app.use("/api", router);

mongoose
  .connect(process.env.MONGO_CONNECT)
  .then(() => {
    app.listen(3030);
    console.log("mongoDB connected!");
  })
  .catch((err) => {
    console.log(err.message);
  });
