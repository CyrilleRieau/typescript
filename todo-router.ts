import {ToDo} from './todo';
import * as express from 'express';

const todo = new ToDo();

export const router = express.Router();

router.get("/", (req, res) => {
//res.header("Access-Control-Allow-Origin", "*");
//res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json(todo.lister())}
);

router.post("/", (req, res) => {
   // res.header("Access-Control-Allow-Origin", "*");
   // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let nouveau = req.body.nouveau;
    todo.ajouter(nouveau);
    res.end('todo ajouté');
});

router.delete("/:suppr", (req, res) => {
   // res.header("Access-Control-Allow-Origin", "*");
   // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    let suppr = req.params.suppr;
    todo.supprimer(suppr);
    res.end('todo supprimé');
});