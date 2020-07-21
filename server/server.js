const express = require("express");
const server = express();
const helmet = require("helmet");
server.use(helmet());
const cors = require("cors");
server.use(cors());
server.use(express.json());
const db = require("../database/users.dbaccess");

const authRouter = require("./auth/auth-router");
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "Running" });
});

server.get("/api/users", async (req, res) => {
  const users = await db.find();
  res.status(200).json({ data: users });
});

module.exports = server;
