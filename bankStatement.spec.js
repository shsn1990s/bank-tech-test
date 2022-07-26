const BankStatement = require("./bankStatement");
const TransactionHistory = require("./transactionHistory");

describe('BankStatement', () => {
  it('generates a statement header', () => {
    const transactionHistory = new TransactionHistory();
    const bankStatement = new BankStatement(transactionHistory);
    expect(bankStatement.printHeader()).toEqual("date || credit || debit || balance");
  });
  it('generates a statement containing debit and credit', () => {
    const transactionHistory = new TransactionHistory();
    const testDate = new Date()
    const testData = {
      date: testDate,
      type: credit,
      amount: 500,
      balance: 1000
    }
    transactionHistory.transactions.push(testData);
    const bankStatement = new BankStatement(transactionHistory);
    expect(bankStatement.printStatement()).toEqual();
  });
});