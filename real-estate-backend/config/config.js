require("dotenv").config();

const buildDatabaseConfig = (databaseName) => ({
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "",
  database: databaseName,
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT || 5432),
  dialect: "postgres",
});

module.exports = {
  development: buildDatabaseConfig(process.env.DB_NAME || "real_estate_backend"),
  test: buildDatabaseConfig(process.env.DB_TEST_NAME || "real_estate_backend_test"),
  production: buildDatabaseConfig(process.env.DB_NAME || "real_estate_backend"),
};
