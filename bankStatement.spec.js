const TransactionHistory = require("./transactionHistory");

describe('BankStatement', () => {
  it('generates a statement header', () => {
    const transactionHistory = new TransactionHistory();
    const bankStatement = new BankStatement(transactionHistory);
    expect(bankStatement.printHeader()).toEqual("date || credit || debit || balance");

  });
});