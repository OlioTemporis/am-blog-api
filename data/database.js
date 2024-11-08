const pg = require("pg");
const Client = pg.Client;

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "am_blog",
  password: "postgres",
  port: 5432,
});

module.exports = client;
