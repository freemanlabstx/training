const mongoose = require("mongoose");

const port = process.env.PORT || 27017;
const url = `mongodb://localhost:${port}/trainingproject`;

const connect = () =>
  mongoose.connect(
    url,
    { useNewUrlParser: true }
  );

module.exports = connect;
