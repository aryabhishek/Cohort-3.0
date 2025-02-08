const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.post("/", (req, res) => {
//     // do something here
// })

app.listen(3000);