const express = require("express");
const app = express();
const path = require("path");
const knex = require("./connection/knex_connection");
require("./connection/create_table");

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World...!");
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.post("/signup", (req, res) => {
  const user = {
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    confirm_password: req.body.confirmPassword,
  };
  knex("main.users")
    .insert(user)
    .then((data) => {
      res.status(200);
      res.json(user);
    })
    .catch((err) => {
      res.status(err.status || 500).send({
        success: false,
        message: err.message || "Internal Server Error",
      });
    });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
