class BankAccountNo {
  public readonly userId: string;
  public userName: string;
  protected _userbalance: number;

  constructor(userId: string, username: string, userbalance: number) {
    this.userId = userId;
    this._userbalance = userbalance;
    this.userName = username;
  }

  set addBalance(amount: number) {
    this._userbalance = this._userbalance + amount;
  }

  get balanceAmount() {
    return this._userbalance;
  }
}

const acc = new BankAccountNo('34', 'merry', 45);
acc.addBalance = 500;
console.log(acc.balanceAmount);
