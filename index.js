import express from "express";
import cors from "cors";
import env from "dotenv/config";
import routes from "./routes/routes.js";
import connectDb from "./config/db.js";
import morgan from "morgan";
import { errorHandler } from "./middlewares/index.js";
const app = express();
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
app.use("/api", routes);

app.use(errorHandler);

app.listen(PORT, () => {
  connectDb();
  console.log("server is running on ->", PORT);
});
