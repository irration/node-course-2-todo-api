const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
  	_id: new ObjectId('5ac16e3a30891c1cce6727c1')
  }, {
  	$set: {
  	  completed: true
  	}
  }, {
  	returnOriginal: false
  }).then((result) => {
  	console.log(result);
  });

  db.close();
});