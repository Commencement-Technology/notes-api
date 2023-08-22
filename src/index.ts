import app from "./server"
import * as dotenv from "dotenv"
import connectDB from "./config/db"

dotenv.config()

connectDB()

const PORT = process.env.PORT! || 8000

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
