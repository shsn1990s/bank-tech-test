class BankStatement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  printHeader = () => 'date || credit || debit || balance \n';

  printStatement() {
    let statement = '';
    this.transactions.transactions.forEach((transaction) => {
      if (transaction.type === 'credit') {
        statement = statement.concat(`${transaction.date.toLocaleDateString('en-UK')}  || ${transaction.amount}  ||  ||  ${transaction.balance}\n`);
      } else {
        statement = statement.concat(`${transaction.date.toLocaleDateString('en-UK')}  ||  ||  ${transaction.amount}  ||  ${transaction.balance}\n`);
      }
    });
    return this.printHeader().concat(statement);
  }
}

module.exports = BankStatement;
