//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) { return console.log('Pãn! Não chego no Banco!'); } 

    console.log('Conecto danada!!');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Bla!'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    db.collection('Todos').deleteOne({text: 'Suck a nut'}).then((result) => {
        console.log(result);
    });


    //db.close();
});