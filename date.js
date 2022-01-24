const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const date = new Date();
  console.log(date);
  response.send(date);
});
