// Given a list of banks with opening times, and a time interval for trading. Determine if you can trade with any banks during the given interval. E.g 00:00 - 08:00 Bank of America 12:00 - 17:00 Swiss Bank 18:00 - 23:00 Goldman Sachs Example 1 06:00 - 10:00 FAIL Because no bank is open from through out the interval 06:00 - 10:00 Example 2 13:00 - 17:00 SUCCESS Because Swiss Bank is open from 13:00 - 17:00


// without coverting
function canTradeDuringInterval(banks, tradingInterval) {
  const [startTime, endTime] = tradingInterval;

  for (const bank of banks) {
    const [openingTime, closingTime] = bank.openingHours;
    if (openingTime >= startTime && closingTime <= endTime) {
      return true; // Found a bank that can be traded with during the interval
    }
  }

  return false; // No bank can be traded with during the interval
}

// Test cases
const banks = [
  { name: 'Bank of America', openingHours: [0, 8] },
  { name: 'Swiss Bank', openingHours: [12, 17] },
  { name: 'Goldman Sachs', openingHours: [18, 23] }
];

console.log(canTradeDuringInterval(banks, [6, 10])); // Should print false
console.log(canTradeDuringInterval(banks, [13, 17])); // Should print true


// with converting:

// Function to convert "HH:MM" time format to minutes since midnight
function convertTimeToMinutes(time) {
  const [hours, minutes] = time.split(':'); // Split the time string into hours and minutes
  return parseInt(hours) * 60 + parseInt(minutes); // Convert hours to minutes and add minutes
}

// Function to check if there's a bank open for trading during the given interval
function canTradeDuringInterval(banks, tradingInterval) {
  // Extract start and end times from the trading interval
  const [startHour, startMinute] = tradingInterval[0].split(':');
  const [endHour, endMinute] = tradingInterval[1].split(':');

  // Convert trading interval times to total minutes since midnight
  const tradingStartTime = parseInt(startHour) * 60 + parseInt(startMinute);
  const tradingEndTime = parseInt(endHour) * 60 + parseInt(endMinute);

  // Iterate through each bank
  for (const bank of banks) {
    const [openingTime, closingTime] = bank.openingHours; // Get bank's opening hours
    // Convert bank's opening and closing times to total minutes since midnight
    if (
      convertTimeToMinutes(openingTime) >= tradingStartTime && // Check if opening time is after or equal to trading start
      convertTimeToMinutes(closingTime) <= tradingEndTime // Check if closing time is before or equal to trading end
    ) {
      return true; // Found a bank that can be traded with during the interval
    }
  }

  return false; // No bank can be traded with during the interval
}

// // Test cases
// const banks = [
//   { name: 'Bank of America', openingHours: ['00:00', '08:00'] },
//   { name: 'Swiss Bank', openingHours: ['12:30', '18:45'] },
//   { name: 'Goldman Sachs', openingHours: ['18:00', '23:00'] }
// ];

// console.log(canTradeDuringInterval(banks, ['06:00', '10:00'])); // Should print false
// console.log(canTradeDuringInterval(banks, ['13:00', '17:00'])); // Should print true

// Test cases
const banks = [
  { name: 'Bank of America', openingHours: ['00:00', '08:00'] },
  { name: 'Swiss Bank', openingHours: ['12:30', '18:45'] },
  { name: 'Goldman Sachs', openingHours: ['18:00', '23:00'] }
];

console.log(canTradeDuringInterval(banks, ['06:00', '10:00'])); // Should print false
console.log(canTradeDuringInterval(banks, ['13:00', '17:00'])); // Should print true
