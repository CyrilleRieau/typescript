import * as sha256 from 'sha256';

export class User {
    private liste:string[] = [];
    private name:string;
    private pswd:string;

ajouter(name, pswd):void {
    let modpswd = sha256(pswd);
    let user:object = {name, modpswd};
    this.liste.push(user);
};

lister():string[]{
    return this.liste;
};
}