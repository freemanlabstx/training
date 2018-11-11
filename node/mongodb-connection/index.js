const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const port = process.env.PORT || 27017;
const url = `mongodb://localhost:${port}`;
const dbName = "myproject";

MongoClient.connect(
  url,
  { useNewUrlParser: true },
  function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    client.close();
  }
);
