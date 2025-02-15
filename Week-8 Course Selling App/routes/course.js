const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {
    res.send("These are the courses you have purchased!");
});

courseRouter.post("/preview", (req, res) => {
  res.send("This is the preview of the course!");
});

module.exports = {
    courseRouter,
}