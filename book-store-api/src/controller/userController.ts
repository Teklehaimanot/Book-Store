// src/controller/userController.ts
import { Request, Response } from "express";
import * as userService from "../service/userService";
import { User } from "../entity/User";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newUser: User = req.body;
    const createdUser = await userService.createUser(newUser);
    res.status(200).json(createdUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
