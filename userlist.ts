import {User} from './user2';

export class UserList {
    users: User[]= [];

    add(u : User) {
        this.users.push(u);
    };
    del(name:string) {
        for(let i =0; i < this.users.length; i++){
            if(this.users[i].name == name){
            this.users.splice(i, 1);
            return true;
            }
        }
        return false;
    };
    auth(name, password:string) {
        for(let u of this.users){
            if(u.name == name && u.password == password){
                return u;
            }
        }
        return null;
    }
}
