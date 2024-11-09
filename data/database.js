const pg = require("pg");
const Pool = pg.Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "am_blog",
  password: "postgres",
  port: 5432,
});

module.exports = pool;
