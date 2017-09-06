import {ToDo} from './todo';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {router} from './todo-router';
const app:express.Express = express();


/*todo.ajouter('ga');
todo.ajouter('lul');
console.log(todo.lister());
todo.supprimer('ga');
console.log(todo.lister());
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use('/todo', router);
app.listen(3000, "localhost", function() {
    console.log('Listening port 3000 !');
});
