//ES6 destructuring
//const MongoClient =  require('mongodb').MongoClient;

const {MongoClient, ObjectID} =  require('mongodb');
var obj = new ObjectID();
//console.log(obj);
var user = {name: 'andrew',age:25};
var {name} = user;
console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

if(err){

return console.log('Unable to connect to mongodb server');
}
console.log('connected to mongo server');

//delete many
// db.collection('Todos').deleteMany({text:'Something to do'}).then((result)=>{
//
// console.log(result);
//
// });

//delete one
// db.collection('Todos').deleteOne({text:'Learn Delete'}).then((result)=>{
// console.log(result);
// });
//find one and delete
// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//
// console.log(result);
// });
db.collection('users').deleteMany({name:'john'}).then((result)=>{

console.log(result);

});
db.close();
});
