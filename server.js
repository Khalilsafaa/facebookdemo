const express = require("express");


const mongoose = require("mongoose")
const cors = require('cors')
const dotenv = require("dotenv").config();
const path = require("path");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/client/build`))
app.use(cors())


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Api running");
});

let dbUrl = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://127.0.0.1:27017/users'

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to MongoDB!')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
mongoose.connection

const infoRoutes = require("./routes/infoRoutes")

app.use("/api/info", infoRoutes);


app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
 })

app.listen(port, () => {
  console.log(`Port running on ${port}`);
});
