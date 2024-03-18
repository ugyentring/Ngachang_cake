import express from "express";
import { readdirSync } from "fs";
const cors = require("cors");

const morgan = require("morgan");
require("dotenv").config();

const app = express();

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const { Pool } = require("pg");
//postgresSQL connection configuration
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "cake",
  password: "root",
  port: 5432,
});
//test the database connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database:", res.rows[0].now);
  }
});

readdirSync("./routes").map((r) => app.use("/", require(`./routes/${r}`)));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
