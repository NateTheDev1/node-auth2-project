const pgConnection = process.env.DATABASE_URL;

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      database: "jwtdb",
      user: "postgres",
      password: "Noble15!!",
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  testing: {
    client: "pg",
    connection: pgConnection,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  production: {
    client: "pg",
    connection: pgConnection,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
};
