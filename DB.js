var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://ubaid:12345@maju.s9w8spw.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database Connected!");
  db.close();
});