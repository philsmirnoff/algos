// Transaction classs to represent a transaction

class Transaction {
  constructor(type, amount, date, fromAccount = null, toAccount = null) {
    this.type = type;
    this.amount = amount;
    this.date = date;
    this.fromAccount = fromAccount;
    this.toAccount = toAccount;
  }

}

// Account class to represent a user's bank account

class Account {
  constructor(owner) {
    this.owner = owner;
    this.balance = 0;
    this.transactions = []
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log('Deposit amount must be greater than zero.');
      return;
    }

    this.balance += amount;
    const transaction = new Transaction('deposit', amount, new Date());
    this.transactions.push(transaction);
    console.log(`${this.owner} deposited ${amount}. Balance: ${this.balance}`);
  }

  transfer(amount, toAccount) {
    if (amount <= 0 || amount > this.balance) {
      console.log('Transfer amount must be greater than zero and less than or equal to balance');
      return;
    }

    this.balance -= amount;
    toAccount.deposit(amount);
    const transaction = new Transaction('transfer', amount, new Date(), this, toAccount);
    this.transactions.push(transaction);
    console.log(`${this.owner} transferred ${amount} to ${toAccount.owner}. Balance: ${this.balance}`)

  }
}


// BankingSystem class to manage multiple accounts
class BankingSystem {

}
