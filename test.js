import { User } from './user';
import { UserList } from './userlist';


let list = new UserList();
list.add(new User("toto", "toto"));
list.add(new User("titi", "titi"));
if (list.users.length != 2) {
    console.error("expects 2 users in the array");
    process.exit(1);
}

list.del("toto");
if (list.users.length != 1) {
    console.error("expect 1 user got" + list.users.length);
    process.exit(1);
}

let u = list.auth("titi", "titi");
if (u.name != "titi" || u.password != "titi") {
    console.error("expect user titi got" + u.name);
    process.exit(1);
}