import express from "express";
import { LinkModel, UserModel } from "./db";
import jwt from "jsonwebtoken";
import { SECRET } from "./config";
import { authenticate } from "./middleware";
import { ContentModel } from "./db";
import { generateRandomHash } from "./utils";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

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
        const existingLink = await LinkModel.findOne({
            //@ts-ignore
            userId: req.userId,
        });

        if (existingLink) {
            res.json({
                hash: existingLink.hash,
            });
            return;
        }
        const hash = generateRandomHash();
        await LinkModel.create({
            //@ts-ignore
            userId: req.userId,
            hash: hash,
        });

        res.json({
            hash,
        });
    } else {
        await LinkModel.deleteOne({
            //@ts-ignore
            userId: req.userId,
        });

        res.json({
            message: "Removed link",
        });
    }
});

app.get("/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;

    const link = await LinkModel.findOne({
        hash
    });

    if (!link) {
        res.status(411).json({
            message: "Sorry incorrect input"
        })
        return;
    }
    // userId
    const content = await ContentModel.find({
        userId: link.userId
    })

    console.log(link);
    const user = await UserModel.findOne({
        _id: link.userId
    })

    if (!user) {
        res.status(411).json({
            message: "user not found, error should ideally not happen"
        })
        return;
    }

    res.json({
        username: user.username,
        content: content
    })
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
