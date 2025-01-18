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

class MinHeap {
  constructor(capacity) {
    this.capacity = capacity;
    this.heap = this.heap;
  }

  insert(transaction) {
    if (this.heap.length < this.capacity) {
      this.heap.push(transaction);
      this.heapifyUp();
    } else if (transaction.amount > this.heap[0].amount) {
      this.heap[0] = transaction;
      heapifyDown();
    }
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].amount >= this.heap[index].amount) {
        [this.heap[parentIndex].amount, this.heap[index].amount] = [this.heap[index].amount, this.heap[parentIndex].amount];
        index = parentIndex;
      }
    }
  }

  heapifyDown() {
    let index = 0;

    while (index < this.heap.length) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallestIndex = index;

      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].amount < this.heap[smallestIndex].amount) {
        smallestIndex = leftChildIndex
      }

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].amount < this.heap[smallestIndex].amount) {
        smallestIndex = rightChildIndex
  }
  if (smallestIndex === index) break;
  [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]]
  index = smallestIndex
}

}

getTopN() {
  return this.heap
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
