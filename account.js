const TransactionHistory = require('./transactionHistory');

class Account {
  constructor () {
    this.balance = 0;
    this.transactionHistory = new TransactionHistory();
  }

  deposit (amount) {
    this.balance += amount;
    this.transactionHistory.push(new Transaction("credit", amount, this.balance));
  }
  
  withdraw (amount) {
    this.balance -= amount;
    this.transactionHistory.push(new Transaction("debit", amount, this.balance));
  }


}

module.exports = Account;