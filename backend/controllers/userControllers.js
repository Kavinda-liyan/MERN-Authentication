import expressAsyncHandler from "express-async-handler";

//Auth user/set token
//route  POST /api/users/auth
// public
const authUser = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

//Register User
//route  POST /api/users
// public
const registerUser = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register User" });
});

//Logout User
//route  POST /api/users/logout
// public
const logoutUser = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
});

//get user profile
//route  GET /api/users/profile
//private
const getUserProfile = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" });
});

//update user profile
//route  PUT /api/users/profile
//private
const updateUserProfile = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
