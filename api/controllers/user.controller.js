import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signIn = async (req, res) => {
  try {
    const validUser = await User.findOne({ email: req.body.email });
    if (!validUser) {
      const generatedPsw = Math.random().toString(36).slice(-8);
      const hashPsw = bcryptjs.hashSync(generatedPsw, 10);
      const newUser = new User({
        email: req.body.email,
        password: hashPsw,
        name: req.body.name,
        photoURL: req.body.photo,
      });
      await newUser.save();
      validUser = await User.findOne({ email });
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = validUser._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = validUser._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const signOut = (req, res) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User has been logged out successfully!");
  } catch (error) {
    res.status(500).json({ error: "An error occurred while logging out." });
  }
};
