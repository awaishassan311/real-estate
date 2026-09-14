import { Sequelize } from "sequelize-typescript";
import { User } from "../models/User";
import dotenv from "dotenv";

dotenv.config();

const databasePort = Number(process.env.DB_PORT || 5432);

export const sequelize = new Sequelize({
  database: process.env.DB_NAME || "real_estate_backend",
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "",
  host: process.env.DB_HOST || "127.0.0.1",
  port: databasePort,
  dialect: "postgres",
  logging: process.env.NODE_ENV === "development" ? console.log : false,
  models: [User],
});
