export class ToDo {
    private liste:string[] = [];

ajouter(item:string):void {
this.liste.push(item);
};
supprimer(item:string):void {
    this.liste = this.liste.filter((valeur) => valeur !== item);
};
lister():string[]{
    return this.liste;
};
}