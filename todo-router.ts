import {ToDo} from './todo';
import * as express from 'express';

const todo = new ToDo();

export const router = express.Router();

router.get("/", (req, res) => 
    res.json(todo.lister()

));

router.post("/", (req, res) => {
    let nouveau = req.body.nouveau;
    todo.ajouter(nouveau);
    res.end('todo ajouté');
});

router.delete("/:suppr", (req, res) => {
    let suppr = req.params.suppr;
    todo.supprimer(suppr);
    res.end('todo supprimé');
});