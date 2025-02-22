import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { SECRET } from "./config";

export const authenticate = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.headers.authorization;
    if (!token) {
        res.json({ message: "Token is missing" });
        return;
    }

    try {
        const decoded = jwt.verify(token, SECRET);
        if (decoded) {
            //@ts-ignore
            req["userId"] = decoded.id;
            next();
        }
    } catch (error) {
        res.json({ message: "Invalid token" });
    }
};
