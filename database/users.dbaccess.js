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

function findByUsername(username) {
  return db.select("*").from("users").where({ username }).first();
}

module.exports = { find, create, findByUsername };
