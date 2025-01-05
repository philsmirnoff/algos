// 207. Course Schedule
// Medium

// 9399

// 383

// Add to List

// Share
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.



// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.


// lets take this example and see how we can solve this problem
// [[0, 1], [0, 2], [1, 2]]

// 0 - 1
// 0 - 2
// 1 - 2

// there is no cycle
// to solve this problem we will use dfs:
// we will create adjacency list
// {
//     0: [1, 2],
//     1: [2],
//     2: []
// }

// we will also need visited set to keep track of visited nodes;
// so we will loop through the adjacency list and call dfs on each key in the adjacency list
// we will start with 0, check if it is int he visted set that means we have a cycle, it it is not in visited set, we add it to visited set and call dfs on 1. 1 is not in visited set, we add it to visited set and call dfs on 2. 2 is not in visited set, we add it to visited set and we can see that it is empty it doesnt have any prereq. and return true to the call stack. before we return true we need to remove 2 from the set. and the reason for that if we go back to 0 and check 2 again it will be cycle.  we will do the same for 1. remove 1 from the set, and remove the course required to complete

// visited: set()
// {
//   0
//   1
//   2
// }

// {
//     0: [1, 2],
//     1: [2],
//     2: []
// }

// then we will return true from 1 to zero. Now 0 has to go to 2, because 2 has to be completed before taking zero.
// and we add 2 to the visted set. and we see that 2 is empty and return true to 0. and remove 2 from the set. and return true to the caller.


const canFinish = (numCourses, prerequisites) => {
    const adjacencyList = {};
    let visited = new Set();
    for (let [course, prereq] of prerequisites) {
        if (course in adjacencyList) {
            adjacencyList[course].push(prereq);
        } else {
            adjacencyList[course] = [prereq];
        }
    }

   const dfs = (curr) = {

    visited.add(curr);


   if (curr in adjacencyList) {
       for (let prereq of adjacencyList[curr]) {
           if (!dfs(prereq)) {
               return false;
           }
       }
   }
   visited.delete(curr);
   adjacencyList[curr] = [];
    return true;
}

for (let key in adjacencyList) {
    if (!dfs(key)) {
        return false;
    }
}
return true;
}

// const canFinish = (numCourses, prerequisites) => {
//     const adjacencyList = {};
//     for (let [course, prereq] of prerequisites) {
//         if (course in adjacencyList) {
//             adjacencyList[course].push(prereq);
//         } else {
//             adjacencyList[course] = [prereq];
//         }
//     }
//     const visited = new Set();
//     for (let course in adjacencyList) {
//         if (!dfs(course, adjacencyList, visited)) {
//             return false;
//         }
//     }
//     return true;
// }

// const dfs = (course, adjacencyList, visited) => {
//     if (course in visited) {
//         return false;
//     }
//     visited.add(course);
//     for (let prereq of adjacencyList[course]) {
//         if (!dfs(prereq, adjacencyList, visited)) {
//             return false;
//         }
//     }
//     visited.delete(course);
//     return true;
// }
