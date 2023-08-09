const fastBomber = require("./modules/sms.js");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  // send html file
  res.sendFile(__dirname + "/index.html");
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
