class Account {
  name: string;
  accountNumber: number;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = () => {
    console.log("depositou");
  };

  withdraw = () => {
    console.log("sacou");
  };
}

class Admin {
  balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  getValue = () => {
    console.log(this.balance);
  };
}

const newAccount: Account = new Account("Marcos", 1);
console.log(newAccount);
