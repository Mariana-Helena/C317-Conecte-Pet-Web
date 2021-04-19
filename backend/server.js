const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
var result='';

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ConectePet:C317ConectePet@clusterc317.bnkbh.mongodb.net/ConectePet?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.get('/api/pets', (req, res) => {
  client.connect(err => {
    const collection = client.db("ConectePet").collection("Pet");
    // perform actions on the collection object
    //client.close();
    res.send({ express: collection.find() });
    
  });
  
  res.send({ express: result });
});
app.listen(port, () => console.log(`Listening on port ${port}`));