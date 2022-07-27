class TransactionHistory {
  constructor() {
    this.transactions = [];
  }

  createTransaction(type, amount, balance) {
    this.transactions.push({
      date: new Date(),
      type,
      amount,
      balance,
    });
  }
}

module.exports = TransactionHistory;
