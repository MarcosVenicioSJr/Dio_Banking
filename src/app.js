"use strict";
class Account {
    constructor(name, accountNumber) {
        this.deposit = () => {
            console.log("depositou");
        };
        this.withdraw = () => {
            console.log("sacou");
        };
        this.name = name;
        this.accountNumber = accountNumber;
    }
}
const newAccount = new Account('Marcos', 1);
console.log(newAccount);
