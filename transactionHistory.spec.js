const TransactionHistory = require('./transactionHistory');

describe('TransactionHistory', () => {
  it('generates a new transaction', () => {
    const transaction = new TransactionHistory();
    transaction.createTransaction('credit', 500, 2500);
    expect(transaction.transactions[0].type).toEqual('credit');
    expect(transaction.transactions[0].amount).toEqual(500);
    expect(transaction.transactions[0].balance).toEqual(2500);
  });
});
