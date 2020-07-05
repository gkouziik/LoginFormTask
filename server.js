const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
const connection = require('./connection');
const opn = require('opn');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

opn('http://localhost:3000/'); 
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname + '/public/LoginPage.html'));
});

app.post('/login', (req,res) => {
    var username = req.body.username;
    var password = req.body.password;
    if(username && password) {
        connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username,password], (error, results, fields) =>{
            if(results.length > 0){
                res.send('Congrats!!!');
            } else {
                res.send('Incorrect Username or/and Password!!!');
            }
            res.end();
        });
    } else {
        res.send('Please enter Username and Password!!!');
        res.end();
    }
})


app.listen(port, () => {
    console.log('Listening on port',port);
});