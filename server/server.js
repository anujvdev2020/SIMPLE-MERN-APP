const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const todoRouter = require("./routes/todo-router");
const userRouter = require("./routes/userName-router");

const app = express();

const apiPort = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use("/", todoRouter);
app.use("/", userRouter);
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
