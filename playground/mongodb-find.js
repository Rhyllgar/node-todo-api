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

    // db.collection('Todos').find({
    //     _id: new ObjectID("5ba93d630f89da4cb07ff1ef")
    // }).toArray().then((result) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(result, undefined, 2))
    // }, (err) => {
    //     console.log("unable to fetch todos", err);
    // })

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log("unable to fetch todos", err);
    })

    db.collection('Users').find({name: 'Johnny Manboy'}).count().then((result) => {
        console.log(`anzahl: ${result}`)
    })
    // client.close();
} )

// 