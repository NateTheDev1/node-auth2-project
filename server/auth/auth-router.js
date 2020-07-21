const router = require("express").Router();
const db = require("../../database/users.dbaccess");
const bcrypt = require("bcryptjs");

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

function verifyBody(req, res, next) {
  if (
    req.body.hasOwnProperty("username") &&
    req.body.hasOwnProperty("password") &&
    req.body.hasOwnProperty("department")
  ) {
    next();
  } else {
    res.status(500).json({ error: "No Body!" });
  }
}

module.exports = router;
