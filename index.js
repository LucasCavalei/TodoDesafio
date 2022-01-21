const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 8000;
const morgan = require("morgan");

require("dotenv").config();
const todoRoute = require("./router/todoRoute");

app.use(express.json());
app.use("/todos", todoRoute);
app.use(morgan("tiny"));

app.use(cors());

app.use(express.json());
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database conectado"))
  .catch((err) => console.log("database fail", err));

app.listen(port, () => {
  console.log("8080 connectado");
});
