const User = require("../models/userModel");
const mongoose = require("mongoose");

// get all users
const getAllUsers = async (_req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    res
      .status(200)
      .json({ users, message: "All users retrieved successfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No users found." });

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: "No users found." });

    res.status(200).json({ user, message: "User retrieved successfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// create user
const createUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    res.status(201).json({ user, message: "User created successfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update user by ID
const updateUserById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No users found." });

  const user = await User.findByIdAndUpdate(id, { ...req.body }, { new: true });

  if (!user) return res.status(404).json({ error: "No users found." });

  return res.status(200).json({ user, message: "User updated successfully." });
};

// delete user by ID
const deleteUserById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "No users found." });

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ error: "No users found." });

    res.status(200).json({ user, message: "User deleted successfully." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
