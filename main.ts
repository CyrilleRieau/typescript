import {ToDo} from './todo';
import { User } from './user2';
import { UserList } from './userlist';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {router} from './todo-router';
import {userRouter} from './user-router';
import * as cors from 'cors';
const app:express.Express = express();


/*todo.ajouter('ga');
todo.ajouter('lul');
console.log(todo.lister());
todo.supprimer('ga');
console.log(todo.lister());
*/

let list = new UserList();
list.add(new User("toto", "toto"));
list.add(new User("titi", "titi"));
list.add(new User("tata", "tata"));
/*if (list.users.length != 2) {
    console.error("expects 2 users in the array");
    process.exit(1);
}*/

/*list.del("toto");
if (list.users.length != 1) {
    console.error("expect 1 user got" + list.users.length);
    process.exit(1);
}
*/
let u = list.auth("titi", "titi");
if (u.name != "titi" || u.password != "titi") {
    console.error("expect user titi got" + u.name);
    process.exit(1);
}
app.use(cors());
app.use("/todo", bodyParser.json());
app.use("/todo", bodyParser.urlencoded({
    extended:true
}));
app.use('/todo', router);

app.use('/user', userRouter);
app.listen(3000, "localhost", function() {
    console.log('Listening port 3000 !');
});
