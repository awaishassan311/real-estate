import { Sequelize } from "sequelize-typescript";
import { User } from "../models/User";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize({
  database: "real_estate_backend", // اسم قاعدة البيانات
  username: "postgres",       
  password: "newpassword123",  // كلمة المرور الخاصة بك
  host: "127.0.0.1",
  dialect: "postgres",
  models: [User],
});
