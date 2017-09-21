//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) { return console.log('Pãn! Não chego no Banco!'); } 

    console.log('Conecto danada!!');

    //findOneAndUpdate
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('59c1da990d786af02f2acab7')
    }, {
        $set: {
            text: 'HueHueHue'
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});