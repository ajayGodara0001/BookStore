import express from "express"
import 'dotenv/config'
import mongoose from "mongoose"
import cors from "cors"
const app = express()

app.use(cors())
app.use(express.json())
// routes
import bookRouter from "./routes/book.route.js"
app.use("/book", bookRouter)

import userRouter from "./routes/user.route.js"
app.use("/user", userRouter)


const port = process.env.PORT || 4001
const URI = process.env.MONGODB_URL
const db_name = process.env.MONGODB_NAME



// connect to mongodb
main()
    .then(() => console.log("connect to mongodb"))
    .catch(err => console.log("mongodb connection failed :  ",err));

async function main() {
  await mongoose.connect(`${URI}/${db_name}`);
}


app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})