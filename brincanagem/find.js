//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) { return console.log('Pãn! Não chego no Banco!'); } 

    console.log('Conecto danada!!');

    //let query = {_id: new ObjectID('59bb3bbc1ecbee1bdcebe850')};

    // db.collection('Todos').find(query).toArray().then((docs) =>{
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Pan!', err);
    // });

    // db.collection('Todos').find().count().then((count) =>{
    //     console.log(`Counts: ${count}`);
    // }, (err) => {
    //     console.log('Pan!', err);
    // });

    let query = {name: 'Zé'};

    db.collection('Users').find(query).toArray().then((docs) =>{
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Pan!', err);
    });

    //db.close();
});