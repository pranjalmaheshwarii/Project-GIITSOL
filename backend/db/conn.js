const mysql = require("mysql2");

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "mysql",// Use container name
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Pranjal2607!@",
  port: parseInt(process.env.DB_PORT, 10) || 3306, // Convert port to number
  database: process.env.DB_NAME || "employees_db"
});

// Open the MySQL connection
connection.connect(error => {
  if (error) {
    console.error("Error connecting to the MySQL database:", error.stack);
    return;
  }
  console.log("Successfully connected to the MySQL database.");
});

module.exports = connection;

