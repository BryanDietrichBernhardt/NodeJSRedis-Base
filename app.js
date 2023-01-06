const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config({ path: "./config/.env" });

app.use(cors());
app.use(express.json());

const connection = require("./database/connection");
connection();

const routes = require("./routes/router");
app.use("/api", routes);

app.listen(3000, () => console.log("API running..."));
