var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sp22bscs0104:Wamiq123@cluster0.4lyitge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Wamiq");
  dbo.collection("Customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});