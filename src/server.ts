import express, {Express} from "express"
import userRouter from "./routes/user"
import bodyParser from "body-parser"

const app: Express = express()

app.use(bodyParser.json())
bodyParser.urlencoded({extended: true})

app.get("/", (req, res) => {
  res.send("hello")
})

app.use("/", userRouter)

export default app
