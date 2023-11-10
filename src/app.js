const express = require("express");
const app = express();
const userRouter = require("../routes/user.js");
const showRouter = require("../routes/show.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
// app.use("/shows", showRouter);

module.exports = app;
