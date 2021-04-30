const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("mongoDB database connection established succefullyy !!")
})

const todoRouter = require('./routes/todoRoute')

app.use('/todos', todoRouter)

app.listen(port, () => {
    console.log(`server is running on port : ${port}`)
})
