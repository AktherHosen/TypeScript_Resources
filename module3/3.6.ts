{
  // getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    get Balance() {
      return this._balance;
    }

    set depositMoney(amount: number) {
      this._balance += amount;
    }
  }

  const AktherHosen = new BankAccount(101, "Mr. Akther", 50);
  AktherHosen.depositMoney = 100;
  const myBalance = AktherHosen.Balance;
  console.log(myBalance);
}
