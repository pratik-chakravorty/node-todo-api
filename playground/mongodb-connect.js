const { MongoClient } = require('mongodb')


//connect to the database server. The database will be automatically created.
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }

    console.log('Connected to MongoDB server');

    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err)
    })

    //db.close();
});