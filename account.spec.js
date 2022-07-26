const Account = require('./account')

describe('Account', () => {
  it('creates a new account with a nil balance', () => {
    const account = new Account();
    expect(account.balance).toEqual(0);
    expect(account.transactionHistory).toEqual([]);
  })
  it('deposits an amount, which is then reflected in balance', () => {
    const account = new Account();
    account.deposit(100);
    expect(account.balance).toEqual(100);
    expect(account.transactionHistory).toEqual([]);
  });
  it('withdraws an amount, which is then reflected in balance', () => {
    const account = new Account();
    account.deposit(100);
    account.withdraw(50);
    expect(account.balance).toEqual(50);
    expect(account.transactionHistory).toEqual([]);
  });
});