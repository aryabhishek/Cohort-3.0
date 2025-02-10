const express = require("express");
const jwt = require("jsonwebtoken");
const SECRET = "IlovebLACKNiggers";
const app = express();

app.use(express.json());

let users = [];

function generateToken() {
  return Math.random().toString(36).substr(2);
}

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", function (req, res) {
  const [username, password] = [req.body.username, req.body.password];

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "You're signed up!",
  });
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = users.find((user) => {
    return user.username === username && user.password === password;
  });

  if (foundUser) {
    const token = jwt.sign({ username: username }, SECRET);
    foundUser.token = token;
    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
});

function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({
      message: "You're not authorized",
    });
  }

  try {
    const decodedData = jwt.verify(token, SECRET);
    req.username = decodedData.username;
    next();
  } catch (e) {
    res.status(401).send({
      message: "You're not authorized",
    });
  }
}

app.get("/me", auth, function (req, res) {
  const foundUser = users.find((user) => {
    return user.username === req.username;
  });

  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    res.status(401).send({
      message: "You're not authorized",
    });
  }
});

app.listen(3000);
