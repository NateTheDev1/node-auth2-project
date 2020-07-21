const router = require("express").Router();
const db = require("../../database/users.dbaccess");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", verifyBody, (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const { username, department, password } = req.body;

  const hash = bcrypt.hashSync(password, salt);

  const user = {
    username,
    password: hash,
    department,
  };

  db.create(user)
    .then((created) => {
      res.status(201).json({ data: created });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: err, message: "Could Not Complete Request" });
    });
});

router.post("/login", async (req, res) => {
  if (
    !req.body.hasOwnProperty("username") &&
    !req.body.hasOwnProperty("password")
  ) {
    res.status(400).json({ error: "Requires a username and password" });
  }

  const user = await db.findByUsername(req.body.username);
  const verified = await bcrypt.compareSync(req.body.password, user.password);

  if (!verified) {
    res.status(400).json({ error: "Username or password is incorrect" });
  }

  const payload = {
    ...user.id,
    ...user.username,
  };

  const secret = process.env.JWT_SECRET || "SECRET_DEVELOPMENT";

  const token = await jwt.sign(payload, secret);

  res.status(200).json({ message: "You have been logged in!", token });
});

function verifyBody(req, res, next) {
  if (
    req.body.hasOwnProperty("username") &&
    req.body.hasOwnProperty("password") &&
    req.body.hasOwnProperty("department")
  ) {
    next();
  } else {
    res.status(400).json({ error: "No Body!" });
  }
}

module.exports = router;
