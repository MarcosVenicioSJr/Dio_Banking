abstract class Account {
  name: string;
  accountNumber: number;
  balance: number = 20

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
  
  getValue = () => {
    console.log(this.balance);
  };
}

