const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/index");

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("common"));

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
