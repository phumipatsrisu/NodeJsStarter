const express = require("express");

const morgan = require("morgan");
const cors = require("cors");
const { readdirSync } = require("fs");
const bodyParser = require("body-parser");
const connectDB = require("./Config/db");

const app = express();
connectDB();
const port = 3000;

app.use(bodyParser.json({ limit: "10mb" }));
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// route 3
readdirSync("./Routes/").map((item) =>
  app.use("/api", require("./Routes/" + item)),
);
