const knex = require("./knex_connection");

knex.schema.hasTable("main.users").then((exists) => {
  if (!exists) {
    return knex.schema
      .createTable("main.users", (table) => {
        table.increments("id").primary();
        table.string("first_name");
        table.string("last_name");
        table.string("email");
        table.string("username");
        table.string("password");
        table.string("confirm_password");
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  console.log("Table has created");
});
