const path = require("path");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const connectionString = ""

//mongoose.disconnect().then(
//  mongoose
//    .connect(connectionString, {
//      dbName: "CV-db"
//    })
//    .then(db => {
//      console.log("db connected");
//    })
//    .catch(err => console.log(err))
//);

// settings
app.set("port", process.env.PORT || 5000);

//Body parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

//Morgan
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(
  express.urlencoded({
    extended: false
  })
);

//enable cross-origin resource sharing (CORS)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization "
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

  next();
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
