var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://ubaid:12345@maju.s9w8spw.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("maju");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});