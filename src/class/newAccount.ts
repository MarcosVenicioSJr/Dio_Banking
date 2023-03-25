import { Account } from "./Account";

export class newAccount extends Account {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number) => {
    this.balance += (value + 10)
    console.log(this.balance)
  };
}
