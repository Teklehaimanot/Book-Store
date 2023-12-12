import express from "express";
import * as userController from "../controller/userController";

const userRouter = express.Router();

/*
// @params none
// method get
//get all user
*/
userRouter.get("/", userController.getAllUsers);

/*
// @params user
// method post
// create user
*/
userRouter.post("/", userController.createUser);

module.exports = userRouter;
