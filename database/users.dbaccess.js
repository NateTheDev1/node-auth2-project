const db = require("./dbConfig");

function find() {
  return db("users");
}

function create(user) {
  return db
    .insert(user)
    .into("users")
    .then((response) => {
      return db.select("*").from("users").where({ username: user.username });
    });
}

module.exports = { find, create };
