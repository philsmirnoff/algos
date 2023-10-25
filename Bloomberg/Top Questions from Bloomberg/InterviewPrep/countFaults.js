// mplement a prototype service to automate the detection and replacement of faulty servers to improve the availability of an application.
// There are n servers with ids s1, 52, ...
// sh, and an array of strings,
// logs, of size m. Log format is "«server_ids «success/errors*, the id of the server, and the status of the processed request. If a particular server id logs an error for three consecutive requests, it is considered faulty and is replaced with a new server with the same id.
// Given n and the array logs, find the number of times a faulty server was replaced.
// Example
// Suppose n = 2 and logs = ['s1 error", "s1 error", "s2 error", "s1
// error", "s1 error", "s2 success"].
// function is expected is expected to return an Integer
// function excepts following paramters:
// 1. interger n
// 2. string_array logs
// complete the countFaults function below
function countFaults(n, logs) {
  let faults = new Map();
  let replacements = 0;
  
  for (let i = 0; i < logs.length; i++) {
    let [serverId, status] = logs[i].split(' ');
    
    if (status === 'error') {
      let count = faults.get(serverId) || 0;
      count++;
      faults.set(serverId, count);
      
      if (count === 3) {
        replacements++;
        faults.set(serverId, 0);
      }
    } else {
      faults.set(serverId, 0);
    }
  }
  
  return replacements;
}

function countFaults(n, logs) {
  
  
  
  
}