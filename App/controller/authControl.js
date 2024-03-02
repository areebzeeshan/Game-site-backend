const { hashPassword, comparePassword } = require("../middlewares/helpers.js");
const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");

const CreatingOrUpdatingUser = async (req, res) => {
  const { name, email, picture } = req.user;

  // find by emial, update name and picture
  const user = await User.findOneAndUpdate({ email }, { name, picture }, { new: true });
  if (user) res.json(user);
  else {
    const newUser = await new User({
      email,
      name: email.split("@")[0],
      picture,
    }).save();
    res.json(newUser);
  }
};

const CurrentUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    res.json(user);
  } catch (error) {
    throw new Error(err);
  }
};

const Register = async (req, res) => {
  const { name, email, password } = req.body;

  // validation
  if (!name) {
    return res.json({ error: "Name is required" });
  } else if (!email) {
    return res.json({ error: "Email is required" });
  } else if (!password || password.length < 6) {
    return res.json({
      error: "Password is required and should be 6 charactor long",
    });
  }

  const exist = await User.findOne({ email });

  if (exist) {
    return res.json({ error: "Email is taken" });
  }

  // hashing the password
  const hashed = await hashPassword(password);

  const user = new User({
    name,
    email,
    password: hashed,
  });

  try {
    await user.save();
    return res.json({ ok: true, user });
  } catch (err) {
    console.log("failed error", err);
    res.status(500).json({ err: "Error, Try again" });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) return res.json({ error: "No user found" });

    console.log(1, user);

    // check password
    const match = await comparePassword(password, user.password);
    if (!match) return res.json({ error: "Credentials are not correct" });
    console.log(2);

    // create a signed token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "4d",
    });

    console.log(3);

    user.password = undefined;

    res.json({ user, token });
  } catch (error) {
    console.log("failed error", error);
    res.status(500).json({ error: "Error, Try again" });
  }
};

module.exports = {
  CreatingOrUpdatingUser,
  CurrentUser,
  Login,
  Register,
};
