import express from "express";
import { LinkModel, UserModel } from "./db";
import jwt from "jsonwebtoken";
import { SECRET } from "./config";
import { authenticate } from "./middleware";
import { ContentModel } from "./db";
import { generateRandomHash } from "./utils";

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

app.get("/content", authenticate, async (req, res) => {
    //@ts-ignore
    const content = await ContentModel.find({ userId: req.userId }).populate(
        "userId",
        "username"
    );
    res.json({ content });
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

app.post("/brain/share", authenticate, async (req, res) => {
    const share = req.body.share;
    if (share) {
        await LinkModel.create({
            //@ts-ignore
            userId: req.userId,
            hash: generateRandomHash(),
        });
        res.json({ message: "Content shared" });
    } else {
        res.json({ message: "Content not shared" });
    }
});

app.get("/brain/:shareLink", async (req, res) => {
    const shareLink = req.params.shareLink;
    const link = await LinkModel.findOne({ hash: shareLink });
    if (!link) {
        res.status(404).json({ message: "Link not found" });
        return;
    }
    const content = await ContentModel.find({ userId: link.userId });

    const user = await UserModel.findOne({ _id: link.userId });
    res.json({
        username: user?.username,
        content: content,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
