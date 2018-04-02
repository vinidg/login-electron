const express = require('express');
const mysql = require('mysql');

//criar conexao
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'KAOS'
});

//Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log("Mysql conectado... ");
});

const app = express();

app.get('/get', (req,res) => {
    var sha512 = require('js-sha512').sha512;
    var hash = sha512('123456');
    res.send();
});

app.get('/getLogin', (req, res) => {
    let valid = true;
    let user = ("teste");
    let sql = 'SELECT * FROM login WHERE user = ?';
    let query = db.query(sql, user, (err,results) => {
        if(err) throw err;
        if(results[0].password != req.password){
            valid = false;
        }
        res.send(valid);
    });
});

app.listen('3000', () => {
    console.log("Server started on port 3000");
});