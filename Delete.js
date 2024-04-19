var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sp22bscs0104:Wamiq123@cluster0.4lyitge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Wamiq");
  var myquery = { address: 'Mountain 21' };
  dbo.collection("Customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});