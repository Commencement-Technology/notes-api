import express, { Express } from "express";
import userRouter from "./routes/user";
import notesRouter from "./routes/notes";
import bodyParser from "body-parser";
import { protectedRoute } from "./middleware/auth";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

const app: Express = express();

app.use(bodyParser.json());
bodyParser.urlencoded({ extended: true });

app.use(cookieParser());

app.use(morgan("combined"));
app.use(cors());

app.get("/", protectedRoute, (req, res) => {
  res.send("hello");
});

app.use("/", userRouter);
app.use("/notes/", protectedRoute, notesRouter);

export default app;
