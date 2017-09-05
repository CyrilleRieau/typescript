const express = require('express');
const bodyParser = require('body-parser');
var app = express();
import {ToDo} from './todo';
const todo = new ToDo();

todo.ajouter('ga');
todo.ajouter('lul');
console.log(todo.lister());
todo.supprimer('ga');
console.log(todo.lister());

/*app.use(express.static('./liste'));
app.get("/list", function(req, res) {
    todo.lister();
    });

app.post("/add", function(req, res) {
todo.ajouter();
});

app.delete("/delete", function(req, res){
todo.supprimer();
});

app.listen(80, "localhost", function() {
    console.log('Listening port 80 !');
});*/
