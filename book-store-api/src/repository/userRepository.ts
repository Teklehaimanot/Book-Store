// src/repository/userRepository.ts
import { Pool } from "pg";
import config from "../config";
import { User } from "../entity/User";

const pool = new Pool(config.db);

export const getUsers = async (): Promise<User[]> => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

export const createUser = async (user: User): Promise<User> => {
  const result = await pool.query(
    "INSERT INTO users(name, email, role, password) VALUES ($1, $2, $3, $4) RETURNING *",
    [user.name, user.email, user.role, user.password]
  );
  return result.rows[0];
};

export const getUserById = async (id: number): Promise<User> => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0];
};
