const { Router } = require('express');
const { home } = require("./controlls/home");
const { createUser } = require("./controlls/createUser");
const { deleteUser } = require("./controlls/deleteUser");
const { getUserById } = require("./controlls/getUserById");
const { getUsers } = require("./controlls/getUsers");



const router = Router();


router.get("/", home);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.delete("/users/:id", deleteUser);

// router.put("/users/:id", updateUser);

module.exports = router


