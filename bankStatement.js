class BankStatement {
  constructor (transactions) {
    this.transactions = transactions;
  }

  printHeader () {
    return "date || credit || debit || balance";
  }

}

module.exports = BankStatement;