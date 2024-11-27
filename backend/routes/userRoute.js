const express = require("express");
const User = require("../models/userModel");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");

const router = express.Router();

// GET all users
router.get("/", getAllUsers);

// GET user by ID
router.get("/:id", getUserById);

// POST a new user
router.post("/", createUser);

// Patch an existing user
router.patch("/:id", updateUserById);

// Delete an existing user
router.delete("/:id", deleteUserById);

module.exports = router;
