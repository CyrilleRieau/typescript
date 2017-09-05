let variableScope : string = "bloup";
const variableConstante : string = "blip";

if(true){
    let variableScope = "blip";
    console.log(variableScope); //blip
}
console.log(variableScope); //bloup

let monTableau:string[] = [];
monTableau.filter(function(valeur){
    return valeur === 'bloup';
});
//équivaut à 
monTableau.filter((valeur) => valeur === 'bloup');
//équivaut à 
monTableau.filter((valeur) => {
    return valeur ==='bloup';
});

import {MaClasse} from './ma_classe';
