function add(a, b) {
  return a + b;
}

const express = require("express");
const app = express();
app.use(express.json()); // a middleware that parses json content

// read
app.get("/", function (req, res) {
    res.send("Hello World");
//   const a = req.query.a;
//   const b = req.query.b;
//   res.send(add(a, b));
});


// write
app.post("/", function(req, res) {
    res.json({"nigg":2})
})


// update
app.put("/", function(req, res) {
    res.status(404);
    res.send("updating...")
})


// delete
app.delete("/", function(req, res) {
    res.send("deleting...")
})
app.listen(3000);
