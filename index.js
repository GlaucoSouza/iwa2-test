// const http = require('http');
// const axios = require('axios');

// http.createServer((req, res)=>{
//   res.write(users.join(", ")); //display the list of users on the page
//   res.write("\n\n"+emails.join(", ")); //display the list of users on the page
//   res.end(); //end the response
// }).listen(8000); // listen for requests on port 8000

// let users = []; // names of users will be stored here
// let email = [];
// (async function getNames(){
//   try{
//     const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
//     users = data.map(user=>user.name);
//     emails = data.map(email=>email.email);
//     console.log(users);
//     console.log(emails);
//   } catch(error){
//     console.log(error)
//   }
// })()

const http = require('http'),
// axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose');

var app = express();
var port = 8000;

app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(require('./routes'));

//this was added to the routes.js

// app.get('/hello/:foo/:bar', (req, res) =>{
//     res.json({message:'Hello BScBest!', data:[
//         req.params.foo,
//         req.params.bar
//     ]});
// });

// //post request
// app.post('/hello', (req, res) => {
//     res.json({result: 'Post was sent', data: req.body});
// });



// http.createServer((req, res)=>{
//   res.write(users.join("\n ")); //display the list of users on the page
//   res.end(); //end the response
// }).listen(8000); // listen for requests on port 8000


//start wars API

// let users = []; // names of users will be stored here
// (async function getNames(){
//   try{
//     const {data} = await axios.get("https://swapi.dev/api/people/");
//     console.log(data)
//     users = data.results.map(user=>user.name);
//     console.log(users);
//     } catch(error){
//     console.log(error)
//   }
// })()


// mongoose.connect('mongodb://localhost/test');

// mongoose.connection.on('error', (err) => { 
//     console.log('Mongodb Error: ', err); 
//     process.exit();
// });
// mongoose.connection.on('connected', () => { 
//     console.log('MongoDB is successfully connected');
// });


app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});

const dbURI = "mongodb://localhost/test";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));
