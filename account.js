const TransactionHistory = require('./transactionHistory');
const BankStatement = require('./bankStatement');

class Account {
  constructor() {
    this.balance = 0;
    this.transactionHistory = new TransactionHistory();
    this.bankStatement = new BankStatement(this.transactionHistory);
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

  statement() {
    return this.bankStatement.printStatement()
  }
}

module.exports = Account;
