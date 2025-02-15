const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  res.send("User signed up successfully!");
});

userRouter.post("/signin", (req, res) => {
  res.send("User signed in successfully!");
});

userRouter.get("/purchases", (req, res) => {
  res.send("User purchases!");
});

module.exports = {
    userRouter,
}