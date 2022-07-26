class TransactionHistory {

  constructor () {
    this.transactions = []
  }

  createTransaction (type, amount, balance) {
    this.transactions.push({
      date: new Date(),
      type: type,
      amount: amount,
      balance: balance
    })
  }

}



module.exports = TransactionHistory;