const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = Schema.Types.ObjectId;

const User = new Schema({
  email: { type: String, unique: true },
  password: String,
  name: String,
});

const Todo = new Schema({
  title: String,
  done: Boolean,
  userId: ObjectID,
});

const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

module.exports = {
  UserModel: UserModel,
  TodoModel: TodoModel,
};
