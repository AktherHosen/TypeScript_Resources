{
  // access modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number;
    protected _balance: number;
    // in private property we use _ before property name because of naming convention
    // But there is an problem of using private property, if we extends this class into another class we can not access private property, at that time we should use protected instead of private, it can not accessible in intances but can accessible inside the extended class.

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    depositMoney(amount: number) {
      this._balance += amount;
    }
    getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance = 102;
    }
  }

  const AktherHosen = new BankAccount(101, "Mr. Akther", 20);
  // we can modify everything, but it's not fruitfull. so, we need to stop this
  // AktherHosen.balance=0
  // if we use private property we can't access to update outside the class.
  AktherHosen.depositMoney(200);
  const newBalance = AktherHosen.getBalance();
  console.log(AktherHosen);
  console.log(newBalance);
}
