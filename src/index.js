const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const router = require("./routes/index");
const logger = require("./utils/logger");

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  process.env.NODE_ENV === "production" ? morgan("common") : morgan("dev")
);
// console.log(process.env.NODE_ENV);
app.use(helmet());

app.use("/api", router);

app.listen(PORT, () => {
  logger.debug("Debug info...");
  logger.info(`Server is running on port ${PORT}...`);
});
