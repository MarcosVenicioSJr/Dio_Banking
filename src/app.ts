import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";


const newPeople: PeopleAccount = new PeopleAccount(1, "Marcos", 1);
console.log(newPeople);

const newCompany: CompanyAccount = new CompanyAccount('DIO', 2,)
newCompany.deposit()