import express, { json } from "express";
import cors from "cors";
const app = express();

app.use(json());
app.use(cors());

app.post("/sum", function (req, res) {
  // body is the object we're going to send through postman
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  res.json({
    "result": a + b,
  });
});

app.listen(3000);
