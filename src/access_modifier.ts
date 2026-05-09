class BankAccount {
  public readonly userId: string;
  public userName: string;
  protected _userbalance: number;

  constructor(userId: string, username: string, userbalance: number) {
    this.userId = userId;
    this._userbalance = userbalance;
    this.userName = username;
  }

  private addbalOnAccount(addBalance: number) {
    this._userbalance = this._userbalance + addBalance;
  }

  public deposite(taka: number): void {
    this.addbalOnAccount(taka);
  }
}

class studentAccount extends BankAccount {
  test() {
    console.log(this._userbalance);
  }
}

const rubel = new BankAccount('22', 'hquae', 45);
console.log(rubel);
rubel.deposite(34);
console.log(rubel);
