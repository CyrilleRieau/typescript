import * as express from 'express';
import * as bodyParser from 'body-parser';
import { User } from './user2';
import { UserList } from './userlist';
export let userRouter = express.Router();
let list = new UserList();
userRouter.use("/", bodyParser.json());

userRouter.post("/", function(req, res){ 
    let name = req.body.name;
    let password = req.body.password;
    if (!name || !password) {
        res.status(400);
        res.send("missing parameter");
        return;
    }
    let u = new User(name, password);
    list.add(u);
    res.send(u);
        });
                                           
userRouter.post("/auth", function(req, res){
    let name = req.body.name;
    let password = req.body.password;
    if (!name || !password) {
        res.status(400);
        res.send("parameter incorrect");
        return;
    };
    let u = list.auth(name, password);
    res.send(u);
});

userRouter.delete("/del", function(req, res){
    let name = req.body.name;
    if (!name) {   
        res.status(400);
        res.send("wrong parameter");
        return;
    }
    let ok = list.del(name);
    
        if (!ok) {
            res.status(404);
        }
        res.send();
});
        