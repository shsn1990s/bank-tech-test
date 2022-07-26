const Transaction = require('./transaction');

class Account {
  constructor () {
    this.balance = 0;
    this.transactionHistory = [];
  }

  deposit (amount) {
    this.balance += amount;
    this.transactionHistory.push(new Transaction("credit", amount, this.balance));
  }
  
  withdraw (amount) {
    this.balance -= amount;
  }


}

module.exports = Account;