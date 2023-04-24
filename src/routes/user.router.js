const express = require("express");
let router = express.Router();
let userController = require("../controllers/user.controller");

router.get("/",userController.home);
router.get("/createUser",userController.createUser);
router.post("/createUser",userController.saveCreateUser);
router.get("/userList",userController.userList);

module.exports = router;