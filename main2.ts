import {User} from './user';
import * as express from 'express';
import * as bodyParser from 'body-parser';
const user = new User();
const router = express.Router();
const app:express.Express = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

router.get("/", (req, res) => 
    res.json(user.lister()));

router.post("/", (req, res) => {
    let name = req.body.name;
    let pswd = req.body.pswd;
    user.ajouter(name, pswd);
    res.end('user ajouté');
});

app.use('/user', router);
app.listen(3000, "localhost", function() {
    console.log('Listening port 3000 !');
});
