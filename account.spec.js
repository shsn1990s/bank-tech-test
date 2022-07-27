const Account = require('./account');
const BankStatement = require('./bankStatement');
// const TransactionHistory = require('./transactionHistory');

// jest.mock('./transactionHistory');

describe('Account', () => {
  it('creates a new account with a nil balance', () => {
    const account = new Account();
    expect(account.balance).toEqual(0);
  });
  it('deposits an amount, which is then reflected in balance', () => {
    const account = new Account();
    account.deposit(100);
    expect(account.balance).toEqual(100);
  });
  it('withdraws an amount, which is then reflected in balance', () => {
    const account = new Account();
    account.deposit(100);
    account.withdraw(50);
    expect(account.balance).toEqual(50);
  });
  it('creates an entry/new transaction instance when a deposit is made', () => {
    const account = new Account();
    account.deposit(200);
    expect(account.transactionHistory.transactions[0].type).toEqual('credit');
    expect(account.transactionHistory.transactions[0].amount).toEqual(200);
    expect(account.transactionHistory.transactions[0].balance).toEqual(200);
  });
  it('creates an entry/new transaction instance when a withdrawal is made', () => {
    const account = new Account();
    account.deposit(500);
    account.withdraw(200);
    expect(account.transactionHistory.transactions[1].type).toEqual('debit');
    expect(account.transactionHistory.transactions[1].amount).toEqual(200);
    expect(account.transactionHistory.transactions[1].balance).toEqual(300);
  });
  it('prevents withdrawal if insufficent funds available', () => {
    const account = new Account();
    account.deposit(500);
    expect(() => { account.withdraw(600); }).toThrow('Insufficient Funds Available.');
  });
  it('creates a bank statement within terminal', () => {
    const account = new Account();
    const testDate = new Date();
    account.deposit(500);
    account.withdraw(200);
    expect(account.statement()).toEqual(`date || credit || debit || balance \n${testDate.toLocaleDateString('en-UK')}  || 500  ||  ||  500\n${testDate.toLocaleDateString('en-UK')}  ||  ||  200  ||  300\n`);
  });
  it('creates a mock transaction instance when a deposit is made', () => {
   const account = new Account();
   jest.mock('./bankStatement', () => jest.fn());

   BankStatement.printStatement = jest.fn(() => { `date || credit || debit || balance \n` })
   expect(account.statement()).toBe(`date || credit || debit || balance \n`);
  });
});
