const TransactionHistory = require('./transactionHistory');

describe('TransactionHistory', () => {
  xit('generates a new transaction', () => {
    const transaction = new TransactionHistory("credit", 500, 2500);
    expect(transaction.type).toEqual("credit");
    expect(transaction.amount).toEqual(500);
    expect(transaction.balance).toEqual(2500);
  });
});