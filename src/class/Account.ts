export abstract class Account {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 40;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value;
      console.log(this.balance);
    }
  };

  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (this.balance < value) {
        console.log("Conta sem saldo");
      } else {
        this.balance -= value
        console.log(this.balance)
      }
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
