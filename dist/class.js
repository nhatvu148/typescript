"use strict";
class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User: " + this.name);
    }
}
let john = new User("John Will", "jdow.com", 20);
console.log(john.age);
