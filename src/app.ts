import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { newAccount } from "./class/newAccount";


const newPeople: PeopleAccount = new PeopleAccount(1, "Marcos", 1);
console.log(newPeople);

const newCompany: CompanyAccount = new CompanyAccount('DIO', 2,)
newCompany.deposit(5)
newCompany.withdraw(5)

const account: newAccount = new newAccount('Marcos', 3)
account.deposit(20)
