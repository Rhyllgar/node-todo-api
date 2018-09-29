const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5baf8d46f2fea7382461f2b21';

// if (!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ' + todos);
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo: ' + todo);
// })

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log("id not found");
//     }
//     console.log('Todo by id: ' + todo);
// }); 

// User.findById

var id = '5dbaa85019a528451300abfed'

if (!ObjectID.isValid(id)){
    return console.log("invalid userId");
}

User.findById(id).then((user) => {
    if(!user){
        console.log('User not found');
    }
    console.log('Here is your user: ' + user);
})