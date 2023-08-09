const rl = require("readline-sync");
const colors = require("colors");
const title = require("./modules/title.js");
const fastBomber = require("./modules/sms.js");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sms", async (req, res) => {
  console.log(req.query);
  const phone = req.query.phone;
  const amount = req.query.amount;
  const sms = await fastBomber(phone, amount);
  res.send({
    status: "success",
    data: sms,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
