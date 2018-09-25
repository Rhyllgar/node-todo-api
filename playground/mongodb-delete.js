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
    
    // // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'lala'
    // }).then((success) => {
    //     console.log(success);
    // });

    // // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: '1'
    // }).then((success) => {
    //     console.log(success);
    // });

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({
        completed: false
    }).then((result) => {
        console.log(result);
    });

    // client.close();
} )

// 