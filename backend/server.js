const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ConectePet:C317ConectePet@clusterc317.bnkbh.mongodb.net/ConectePet?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/pets', (req, res) => {
  var response;
  const collection = client.db("ConectePet").collection("Pet");    
  collection.find({}).toArray(function(err, result) {
    if (err) throw err;
    response=result;
    res.send({ express: response });
  });   
  
});

client.connect();
app.listen(port, () => console.log(`Listening on port ${port}`));