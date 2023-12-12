// src/service/userService.ts
import { User } from "../entity/User";
import * as userRepository from "../repository/userRepository";

export const getAllUsers = async (): Promise<User[]> => {
  return userRepository.getUsers();
};

export const createUser = async (user: User): Promise<User> => {
  return userRepository.createUser(user);
};
