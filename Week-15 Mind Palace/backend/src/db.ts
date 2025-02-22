import mongoose, { Schema, model } from "mongoose";
const dbPassword = "COrDLt6my5O0W9eK";
const dbName = "mindPalace";

mongoose.connect(
    `mongodb+srv://aryabhishek:${dbPassword}@cluster0.2idbc.mongodb.net/${dbName}`
);

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

const UserModel = model("User", UserSchema);
const ContentModel = model("Content", ContentSchema);

export { UserModel, ContentModel };
