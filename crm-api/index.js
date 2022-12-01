const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8000
const customerRouter = require('./src/routers/customer.router')
const invoiceRouter = require('./src/routers/invoice.router')
const userRouter = require('./src/routers/user.router')
const connect = require('./config/mongoose.config')

connect()

app.use(express.json())
app.use(cors())

// Routes express
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api", customerRouter)
app.use("/api", invoiceRouter)
app.use("/api", userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})