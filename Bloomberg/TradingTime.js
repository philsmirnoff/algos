// Given a list of banks with opening times, and a time interval for trading. Determine if you can trade with any banks during the given interval. E.g 00:00 - 08:00 Bank of America 12:00 - 17:00 Swiss Bank 18:00 - 23:00 Goldman Sachs Example 1 06:00 - 10:00 FAIL Because no bank is open from through out the interval 06:00 - 10:00 Example 2 13:00 - 17:00 SUCCESS Because Swiss Bank is open from 13:00 - 17:00


// without coverting
// Function to check if there's a bank open for trading during the given interval
function canTradeDuringInterval(banks, testInterval) {
  // Initialize an array of length 24 to represent hours in a day
  const a = Array(24).fill(0); // Initialize the array with all zeros

  // Function to set the hours during which a bank is open
  function setBankHours(openingTime, closingTime) {
    const startHour = parseInt(openingTime.split(':')[0]);
    const endHour = parseInt(closingTime.split(':')[0]);

    // Set the corresponding indexes in the 'a' array to 1
    for (let hour = startHour; hour <= endHour; hour++) {
      a[hour] = 1;
    }
  }

  // Set bank hours in the 'a' array
  for (const bank of banks) {
    setBankHours(bank.openingHours[0], bank.openingHours[1]);
  }

  const [startHour, endHour] = testInterval.split('-').map(time => parseInt(time.split(':')[0]));

  // Check if all elements in the range of 'a' array are equal to 1
  for (let hour = startHour; hour <= endHour; hour++) {
    if (a[hour] !== 1) {
      return false; // Found an hour with no open banks
    }
  }

  return true; // All hours have open banks
}

// Example bank data
const banks = [
  { openingHours: ['11:00', '17:00'], name: 'Morgan Stanley' },
  { openingHours: ['09:00', '14:00'], name: 'Goldman Sachs' },
  // Add more bank data here
];

// Test the canTradeDuringInterval function
const testInterval = '10:00-15:00';
const canTrade = canTradeDuringInterval(banks, testInterval);
console.log(canTrade); // Should print true or false
