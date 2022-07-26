describe('Account', () => {
  it('creates a new account with a nil balance', () => {
    const account = new Account();
    expect(account.balance).toEqual(0);
    expect(account.transactionHistory).toEqual([]);
  })
});