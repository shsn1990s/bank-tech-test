const TransactionHistory = require('./transactionHistory');

class Account {
  constructor() {
    this.balance = 0;
    this.transactionHistory = new TransactionHistory();
  }

  deposit(amount) {
    this.balance += amount;
    this.transactionHistory.createTransaction('credit', amount, this.balance);
  }

  withdraw(amount) {
    if ((this.balance - amount) < 0) throw new Error('Insufficient Funds Available.');
    this.balance -= amount;
    this.transactionHistory.createTransaction('debit', amount, this.balance);
  }
}

module.exports = Account;
