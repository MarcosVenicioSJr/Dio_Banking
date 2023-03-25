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

class PeopleAccount extends Account {
    doc_number: number;

    constructor(doc_number: number, name: string, accountNumber: number) {
        super(name, accountNumber);
        this.doc_number = doc_number;
    }
}

const newPeople: PeopleAccount = new PeopleAccount(1, 'Marcos', 1)
console.log(newPeople)