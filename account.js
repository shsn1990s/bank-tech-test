class Account {
  constructor () {
    this.balance = 0;
    this.transactionHistory = [];
  }

  deposit (amount) {
    this.balance += amount;
  }
  

}

module.exports = Account;