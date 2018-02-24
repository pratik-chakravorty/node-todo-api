const { MongoClient } = require('mongodb')


//connect to the database server. The database will be automatically created.
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }

    console.log('Connected to MongoDB server');

    db.collection('Users').find({ name: 'Stacy' }).toArray().then((doc) => {

        console.log(JSON.stringify(doc, undefined, 2));
    }, (err) => {
        if (err) {
            return console.log('Unable to find the name', err);
        }
    })
    //db.close();
});