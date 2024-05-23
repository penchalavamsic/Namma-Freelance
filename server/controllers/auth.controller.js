const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");
const { v4 } = require("uuid");

const registerUser = async (req, res) => {
  const { email, password, name } = req.body;
  const user = await UserModel.findOne({ email });
  if (user === null) {
    if (password.length < 6) {
      res.status(400).send("Password is too short");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await UserModel.create({
        userid: v4(),
        name: name,
        email: email,
        hashedPassword: hashedPassword,
      });
      res.status(201).send("User created successfully");
    }
  } else {
    res.status(400).send("User already exists");
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user) {
    const passwordMatch = await bcrypt.compare(password, user.hashedPassword);
    if (passwordMatch) {
      const token = jwt.sign(
        { userId: user.userid, email: user.email },
        process.env.JWT_SECRET
      );
      res.status(200).json({ token });
    } else {
      res.status(401).send("Invalid credentials");
    }
  } else {
    res.status(401).send("Invalid credentials");
  }
};

module.exports = { registerUser, loginUser };
