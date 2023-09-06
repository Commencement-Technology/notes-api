import app from "./server";
import * as dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();

const dbURL: string = process.env.mongoURL!

connectDB(dbURL);

const PORT = process.env.PORT! || 8000;

app.listen(PORT, () => {
  process.stdout.write(`App running on port ${PORT}\n`);
});
