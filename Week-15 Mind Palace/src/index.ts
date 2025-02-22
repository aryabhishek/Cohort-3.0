import express from "express";
import { UserModel } from "./db";
import jwt from "jsonwebtoken";
import { SECRET } from "./config";
import { authenticate } from "./middleware";
import { ContentModel } from "./db";

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        await UserModel.create({
            username: username,
            password: password,
        });
        res.json({ message: "User signed up" });
    } catch (error) {
        res.json({ message: "User already exists" });
    }
});

app.post("/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await UserModel.findOne({
        username: username,
        password: password,
    });
    if (existingUser) {
        const token = jwt.sign({ id: existingUser._id }, SECRET);
        res.json({ message: "User logged in", token: token });
    } else {
        res.json({ message: "Invalid credentials" });
    }
});

app.post("/content", authenticate, async (req, res) => {
    const link = req.body.link;
    const title = req.body.title;
    await ContentModel.create({
        title: title,
        link: link,
        //@ts-ignore
        userId: req.userId,
        tags: [],
    });
    res.json({ message: "Content added" });
});

app.delete("/content", authenticate, async (req, res) => {
    const contentId = req.body.contentId;
    await ContentModel.deleteOne({
        _id: contentId,
        //@ts-ignore
        userId: req.userId,
    });
    res.json({ message: "Content deleted" });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
