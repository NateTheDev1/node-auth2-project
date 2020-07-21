exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "User 1",
          password: "example",
          department: "administrators",
        },
        {
          id: 2,
          username: "User 1",
          password: "example",
          department: "administrators",
        },
      ]);
    });
};
