const BankStatement = require('./bankStatement');
const TransactionHistory = require('./transactionHistory');

describe('BankStatement', () => {
  it('generates a statement header', () => {
    const transactionHistory = new TransactionHistory();
    const bankStatement = new BankStatement(transactionHistory);
    expect(bankStatement.printHeader()).toEqual('date || credit || debit || balance \n');
  });
  it('generates a statement containing debit and credit', () => {
    const transactionHistory = new TransactionHistory();
    const testDate = new Date();
    const testData = {
      date: testDate,
      type: 'debit',
      amount: 500,
      balance: 1000,
    };
    const testData2 = {
      date: testDate,
      type: 'credit',
      amount: 1500,
      balance: 1000,
    };

    transactionHistory.transactions.push(testData);
    transactionHistory.transactions.push(testData2);
    const bankStatement = new BankStatement(transactionHistory);
    expect(bankStatement.printStatement()).toEqual(`date || credit || debit || balance \n${testDate.toLocaleDateString('en-UK')}  ||  ||  500  ||  1000\n${testDate.toLocaleDateString('en-UK')}  || 1500  ||  ||  1000\n`);
  });
});
