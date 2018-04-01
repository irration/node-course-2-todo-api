//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

var obj = new ObjectId().getTimestamp();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
  	return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');
/*
  db.collection('Todos').find({
  	_id: new ObjectId('5ac0d5e47044b023a8d9d095')
  }).toArray().then((docs) => {
  	console.log('Todos');
  	console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
  	console.log('Unable to fetch todos', err);
  });
*/

  db.collection('Users').find({
  	name: 'Nisei'
  }).toArray().then((docs) => {
  	console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
  	console.log('Unable to fetch users', err);
  });


  db.close();
});
