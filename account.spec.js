const Account = require('./account')
const TransactionHistory = require('./transactionHistory');

describe('Account', () => {
  it('creates a new account with a nil balance', () => {
    const account = new Account();
    expect(account.balance).toEqual(0);
  })
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
  xit('creates an entry/new transaction instance when a deposit is made', () => {
    const account = new Account();
    account.deposit(200);
    expect(account.transactionHistory[0].type).toEqual("credit");
    expect(account.transactionHistory[0].amount).toEqual(200);
    expect(account.transactionHistory[0].balance).toEqual(200);
  });
  xit('creates an entry/new transaction instance when a withdrawal is made', () => {
    const account = new Account();
    account.deposit(500);
    account.withdraw(200);
    expect(account.transactionHistory[1].type).toEqual("debit");
    expect(account.transactionHistory[1].amount).toEqual(200);
    expect(account.transactionHistory[1].balance).toEqual(300);
  });
  xit('creates a mock transaction instance when a deposit is made', () => {
    jest.mock('./transaction');
    const account = new Account();
    const mockTransaction = new Transaction();
    mockTransaction.type.mockImplementation(() => "credit");
    account.deposit(200);
    expect(account.transactionHistory[0].type).toEqual("credit");
    // expect(account.transactionHistory[0].amount).toEqual(200);
    // expect(account.transactionHistory[0].balance).toEqual(200);
  });
});