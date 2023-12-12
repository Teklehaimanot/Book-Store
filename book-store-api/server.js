// app.js (or index.js)
const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT || 3000;

// PostgreSQL configuration
const pool = new Pool({
  user: "teklehaimanotbelete",
  host: "localhost",
  database: "bookstore",
  password: "",
  port: 5432,
});

// Test route
app.get("/testdb", async (req, res) => {
  try {
    // Attempt to connect to the PostgreSQL database
    const client = await pool.connect();
    console.log("Connected to the database");

    // Execute a simple query
    const result = await client.query("SELECT * FROM users WHERE id = 1");
    console.log("Query result:", result.rows[0]);

    // Release the client back to the pool
    client.release();

    res.send("Connected to PostgreSQL and executed a query!");
  } catch (error) {
    console.error("Error connecting to PostgreSQL:", error);
    res.status(500).send("Error connecting to PostgreSQL");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
