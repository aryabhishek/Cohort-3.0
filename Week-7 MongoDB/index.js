const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const { strict } = require("assert");

const app = express();
const port = 3000;
const secretKey = "wholetthedogsout";

app.use(express.json());

mongoose.connect(
  "mongodb+srv://aryabhishek:COrDLt6my5O0W9eK@cluster0.2idbc.mongodb.net/todo-app-db"
);

function generateToken(id) {
  return jwt.sign({ id }, secretKey);
}

function validateInput(req, res, next) {
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8).max(20),
        name: z.string().min(3),
    });
    const parsedDataWithSuccess = schema.safeParse(req.body);

    if (parsedDataWithSuccess.success) {
        next();
    } else {
        res.status(400).json({
            message: "Invalid input",
        });
    }
}

function auth(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    try {
      const decoded = verifyToken(token);
      req.userId = decoded.id;
      next();
    } catch (error) {
      res.status(403).json({
        message: "Invalid token",
      });
    }
  } else {
    res.status(403).json({
      message: "Token is required",
    });
  }
}

function verifyToken(token) {
  return jwt.verify(token, secretKey);
}

app.post("/signup", validateInput, async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const hashedPassword = await bcrypt.hash(password, 4);

  await UserModel.create({
    email: email,
    password: hashedPassword,
    name: name,
  });
  res.json({
    message: "You're signed up successfully",
  });
});

app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email: email,
  });

  const passwordMatch = await bcrypt.compare(password, response.password);

  if (passwordMatch) {
    const token = generateToken(response._id.toString());
    res.json({ token: token });
  } else {
    res.status(403).json({
      message: "Invalid email or password",
    });
  }
});

app.post("/todo", auth, async (req, res) => {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;
  await TodoModel.create({
    title,
    done,
    userId,
  });

  res.json({
    userId,
  });
});

app.get("/todos", auth, async (req, res) => {
  const userId = req.userId;
  const todos = await TodoModel.find({
    userId,
  });
  res.json({
    todos: todos,
  });
});

app.listen(port, () => {
  console.clear();
  process.on("SIGINT", () => {
    console.clear();
    process.exit();
  });
  console.log(`Server is running on http://localhost:${port}`);
});
