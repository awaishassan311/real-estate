import dotenv from "dotenv";
import { sequelize } from "./config/database";
import app from "./app";

dotenv.config();

const PORT = Number(process.env.PORT || 5000);

const startServer = async () => {
  try {
    await sequelize.authenticate();

    if (process.env.DB_SYNC === "true") {
      await sequelize.sync();
    }

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

void startServer();
