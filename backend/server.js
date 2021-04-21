const express = require('express');
const cors = require('cors');
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

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/vacinas/registro/:email', (req, res) => {
  var response;
  const collection = client.db("ConectePet").collection("Pet");    
  console.log(req.params.email)
  collection.find({usuario: req.params.email}).toArray(function(err, result) {
    if (err) throw err;
    response=result;
    res.send({ express: response });
  });   
  
});

app.post('/vacinas/registro', (req, res) => {
  const collection = client.db("ConectePet").collection("Vacinas");    
  collection.insertOne(req.body);
  res.end();
});

client.connect();
app.listen(port, () => console.log(`Listening on port ${port}`));