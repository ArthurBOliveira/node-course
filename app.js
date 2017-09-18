//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) { return console.log('Pãn! Não chego no Banco!'); } 

    console.log('Conecto danada!!');

    // db.collection('Todos').insertOne({
    //     text: 'Bla!',
    //     completed: false
    // }, (err, result) => {
    //     if(err) { return console.log('Pãn!', err); }
        
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //    name: 'Arthur',
    //    age: 24,
    //    location: 'São Paulo'
    // }, (err, result) =>{
    //     if(err) { return console.log('Pãn!', err); }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.close();
});