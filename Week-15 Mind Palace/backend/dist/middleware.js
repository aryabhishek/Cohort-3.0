"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.json({ message: "Token is missing" });
        return;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, config_1.SECRET);
        if (decoded) {
            //@ts-ignore
            req["userId"] = decoded.id;
            next();
        }
    }
    catch (error) {
        res.json({ message: "Invalid token" });
    }
};
exports.authenticate = authenticate;
