const { Router } = require('express');
const { home } = require("./controlls/home");
const { createUserControls } = require("./controlls/createUser");
const { deleteUserControls } = require("./controlls/deleteUser");
const { getUserById } = require("./controlls/getUserById");
const { getUsers } = require("./controlls/getUsers");



const router = Router();


router.get("/", home);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUserControls);
router.delete("/users/:id", deleteUserControls);

// router.put("/users/:id", updateUser);

module.exports = router


