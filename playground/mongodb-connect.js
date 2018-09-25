// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

var obj = new ObjectID();  
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err){
        return console.log("unable to connect to MongoDB server")
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log ("Unable to insert todo", err)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

// insert new doc into Users (anme, age, location)
//    db.collection('Users').insertOne({
//         name: 'Johnny Manboy',
//         age: 231,
//         location: 'St. Angers hospital'
//     }, (err, result) => {
//         if(err) {
//             return console.log ("Unable to insert user", err)
//         }

//         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
//     })

    client.close();
} )

// 