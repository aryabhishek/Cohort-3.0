"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const middleware_1 = require("./middleware");
const db_2 = require("./db");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    try {
        yield db_1.UserModel.create({
            username: username,
            password: password,
        });
        res.json({ message: "User signed up" });
    }
    catch (error) {
        res.json({ message: "User already exists" });
    }
}));
app.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = yield db_1.UserModel.findOne({
        username: username,
        password: password,
    });
    if (existingUser) {
        const token = jsonwebtoken_1.default.sign({ id: existingUser._id }, config_1.SECRET);
        res.json({ message: "User logged in", token: token });
    }
    else {
        res.json({ message: "Invalid credentials" });
    }
}));
app.post("/content", middleware_1.authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const link = req.body.link;
    const title = req.body.title;
    yield db_2.ContentModel.create({
        title: title,
        link: link,
        //@ts-ignore
        userId: req.userId,
        tags: [],
    });
    res.json({ message: "Content added" });
}));
app.delete("/content", middleware_1.authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contentId = req.body.contentId;
    yield db_2.ContentModel.deleteOne({
        _id: contentId,
        //@ts-ignore
        userId: req.userId,
    });
    res.json({ message: "Content deleted" });
}));
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
