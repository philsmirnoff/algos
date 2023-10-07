// 1396. Design Underground System
// Medium

// 2146

// 105

// Add to List

// Share
// An underground railway system is keeping track of customer travel times between different stations. They are using this data to calculate the average time it takes to travel from one station to another.

// Implement the UndergroundSystem class:

// void checkIn(int id, string stationName, int t)
// A customer with a card ID equal to id, checks in at the station stationName at time t.
// A customer can only be checked into one place at a time.
// void checkOut(int id, string stationName, int t)
// A customer with a card ID equal to id, checks out from the station stationName at time t.
// double getAverageTime(string startStation, string endStation)
// Returns the average time it takes to travel from startStation to endStation.
// The average time is computed from all the previous traveling times from startStation to endStation that happened directly, meaning a check in at startStation followed by a check out from endStation.
// The time it takes to travel from startStation to endStation may be different from the time it takes to travel from endStation to startStation.
// There will be at least one customer that has traveled from startStation to endStation before getAverageTime is called.
// You may assume all calls to the checkIn and checkOut methods are consistent. If a customer checks in at time t1 then checks out at time t2, then t1 < t2. All events happen in chronological order.



// Example 1:

// Input
// ["UndergroundSystem","checkIn","checkIn","checkIn","checkOut","checkOut","checkOut","getAverageTime","getAverageTime","checkIn","getAverageTime","checkOut","getAverageTime"]
// [[],[45,"Leyton",3],[32,"Paradise",8],[27,"Leyton",10],[45,"Waterloo",15],[27,"Waterloo",20],[32,"Cambridge",22],["Paradise","Cambridge"],["Leyton","Waterloo"],[10,"Leyton",24],["Leyton","Waterloo"],[10,"Waterloo",38],["Leyton","Waterloo"]]

// Output
// [null,null,null,null,null,null,null,14.00000,11.00000,null,11.00000,null,12.00000]

// Explanation
// UndergroundSystem undergroundSystem = new UndergroundSystem();
// undergroundSystem.checkIn(45, "Leyton", 3);
// undergroundSystem.checkIn(32, "Paradise", 8);
// undergroundSystem.checkIn(27, "Leyton", 10);
// undergroundSystem.checkOut(45, "Waterloo", 15);  // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
// undergroundSystem.checkOut(27, "Waterloo", 20);  // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10
// undergroundSystem.checkOut(32, "Cambridge", 22); // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14
// undergroundSystem.getAverageTime("Paradise", "Cambridge"); // return 14.00000. One trip "Paradise" -> "Cambridge", (14) / 1 = 14
// undergroundSystem.getAverageTime("Leyton", "Waterloo");    // return 11.00000. Two trips "Leyton" -> "Waterloo", (10 + 12) / 2 = 11
// undergroundSystem.checkIn(10, "Leyton", 24);
// undergroundSystem.getAverageTime("Leyton", "Waterloo");    // return 11.00000
// undergroundSystem.checkOut(10, "Waterloo", 38);  // Customer 10 "Leyton" -> "Waterloo" in 38-24 = 14
// undergroundSystem.getAverageTime("Leyton", "Waterloo");    // return 12.00000. Three trips "Leyton" -> "Waterloo", (10 + 12 + 14) / 3 = 12

// break it down in steps how to solve this problem
// 1. In the class constructor create a hashmap checkIns to keep track of a customer, checkin station and checkin time.
// id: { stationName, time: t}
// 2. create a hashmap travelTimes to keep track of total time travel, trip counts
// { `startStation:endStation`: {totalTime: 0, count: 0}
// 3. for checkIn method record a customer's check in information
//   this.checkIns.set(id, { stationName, time: t });
// 4. for checkout method: // retrieve the check in information for the given customer ID, checkInInfo, startStation, timeTravel(calculate time)
// 5. create a key `${startStation}:${stationName}`, check if the key exist in travelTime hashmap, if its not add it with value totalTime, count
// 6. extract the travelInfo and update totalTime and count and delete id from checkIns
// 7. for getAverage method: create key `${startStation}:${endStation}`
// 8. extract travelInfo and return travelInfo.totalTime / travelInfo.count


var UndergroundSystem = function() {
  // create hashmap to keep track of customer, checkin station, and check in time
  // create hashmap to keep track of total time travel, and trip counts
      this.checkIns = new Map(); // { id: { stationName, time }}
      this.travelTimes = new Map(); // { startStion:endStation: { totalTravel, count }}

};

/**
* @param {number} id
* @param {string} stationName
* @param {number} t
* @return {void}
*/


UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  // record a customer's check in information
  this.checkIns.set(id, { stationName, time: t });
};

/**
* @param {number} id
* @param {string} stationName
* @param {number} t
* @return {void}
*/
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  // retrieve the check in information for the given customer ID
  const checkInInfo = this.checkIns.get(id);
  const startStation = checkInInfo.stationName;
  const travelTime = t - checkInInfo.time; // calculate travel time

  // create unique key for the start and end station pair
  const key = `${startStation}:${stationName}`;

  // if the travel time information for the start and end station doesnt exist in traveltimes map, add it
  if (!this.travelTimes.has(key)) {
      this.travelTimes.set(key, { totalTime: 0, count: 0})
  }

  // retrieve the total travel time and the count of trips for the given start-end station pair
  const travelInfo = this.travelTimes.get(key)

  // update total travel time and the count of trips for the given start-end station pair
  travelInfo.totalTime += travelTime;
  travelInfo.count++;

  // remove the customers check in information from the checkIns map
  this.checkIns.delete(id)
  };

/**
* @param {string} startStation
* @param {string} endStation
* @return {number}
*/
// calculate and return average travel time for the given start and end staion
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  // create unique key for the start and station pair
  const key = `${startStation}:${endStation}`


      // Retrieve the travel time information for the start-end station pair
      const travelInfo = this.travelTimes.get(key);

      // Calculate and return the average travel time
      return travelInfo.totalTime / travelInfo.count;


};
// Example usage
const undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(45, "Leyton", 3);
undergroundSystem.checkIn(32, "Paradise", 8);
undergroundSystem.checkIn(27, "Leyton", 10);
undergroundSystem.checkOut(45, "Waterloo", 15);
undergroundSystem.checkOut(27, "Waterloo", 20);
undergroundSystem.checkOut(32, "Cambridge", 22);

console.log(undergroundSystem.getAverageTime("Paradise", "Cambridge")); // Output: 14.0
console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo")); // Output: 11.0
