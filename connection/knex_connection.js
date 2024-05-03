const env = require("dotenv").config();
const knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
  },
});

module.exports = knex;
// export default knex;

// console.log("knex", knex.client);

// const env = require("dotenv").config();
// const knex = require("knex")({
//   client: "mysql",
//   connection: {
//     host: "localhost",
//     user: "root",
//     password: "Crazypooh@1379",
//     database: "students_database",
//   },
// });

// module.exports = knex;
// // module.exports = knex;
