// case 1: if the amount > $1000
// case 2: time1 - time <= 60 min && name1 !== name && city1 !== city
// if these conditions meet push to the result array

// 1. create array invalid to hold the results
// 2. create double for loop outer loop will eterate over the transections and check amount if its covering case1 . if it is => push to the invalid array
// 3. inner loop (make sure to check if (j != i) to avois the same transaction) will iterate over the each transaction and check if the case 2 is covered
// 4. push the results into the invalid transactions[i]

const invalidTransactions = (transactions) => {
  // create an array to hold the invalid transactions
  let invalid = [];

  for (let i = 0; i < transactions.length; i++) {
    let [name, time, amount, city] = transactions[i].split(",");
    if (amount >= 1000) {
      invalid.push(transactions[i]);
      continue;
    }

    for (let j = 0; j < transactions.length; j++) {
      let [name2, time2, amount2, city2] = transactions[j].split(",");
      if (j !== i) {
        if (name2 === name && Math.abs(time2 - time) <= 60 && city !== city2) {
          invalid.push(transactions[i]);
          break;
        }
      }
    }
  }

  return invalid;
};
