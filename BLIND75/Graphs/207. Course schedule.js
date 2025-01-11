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
    for (let [course, prereq] of prerequisites) {
        if (course in adjacencyList) {
            adjacencyList[course].push(prereq);
        } else {
            adjacencyList[course] = [prereq];
        }
    }
    const visited = new Set();
    for (let course in adjacencyList) {
        if (!dfs(course, adjacencyList, visited)) {
            return false;
        }
    }
    return true;
}

const dfs = (course, adjacencyList, visited) => {
    if (course in visited) {
        return false;
    }
    visited.add(course);
    for (let prereq of adjacencyList[course]) {
        if (!dfs(prereq, adjacencyList, visited)) {
            return false;
        }
    }
    visited.delete(course);
    return true;
}


// Another solution can be based on Kahn's Algorithm for Topological Sorting. This approach uses in-degree (the number of incoming edges for each node) to detect if a valid topological sort is possible. If we can process all courses without encountering a cycle, it means we can complete all the courses. If we encounter a cycle, it means it’s impossible to finish all courses.

// Here’s the solution using Kahn's Algorithm:

// javascript
// Copy code
// var canFinish = function(numCourses, prerequisites) {
//     // Step 1: Create an adjacency list to represent the graph
//     const graph = new Array(numCourses).fill().map(() => []);
//     // Step 2: Create an array to track the in-degrees (number of prerequisites for each course)
//     const inDegree = new Array(numCourses).fill(0);

//     // Step 3: Fill the graph and in-degree array with the course dependencies
//     for (let [course, pre] of prerequisites) {
//         graph[pre].push(course); // Course depends on the prerequisite
//         inDegree[course]++; // Increment the in-degree of the course
//     }

//     // Step 4: Initialize a queue to store all courses with no prerequisites (in-degree 0)
//     const queue = [];
//     for (let i = 0; i < numCourses; i++) {
//         if (inDegree[i] === 0) {
//             queue.push(i);
//         }
//     }

//     // Step 5: Process the courses in the queue
//     let count = 0; // To track the number of courses we can finish

//     while (queue.length > 0) {
//         const course = queue.shift();
//         count++; // We can finish this course

//         // Decrease the in-degree of all the courses dependent on the current course
//         for (let nextCourse of graph[course]) {
//             inDegree[nextCourse]--;
//             if (inDegree[nextCourse] === 0) {
//                 queue.push(nextCourse); // If a course has no remaining prerequisites, add it to the queue
//             }
//         }
//     }

//     // Step 6: If we've processed all courses, return true; otherwise, return false
//     return count === numCourses;
// };
// Explanation:
// Graph Representation: We build an adjacency list where each course points to the courses that depend on it. For example, if course 1 depends on course 0, we add course 1 to the list of courses that depend on course 0.

// In-degree Array: This array tracks how many prerequisites (incoming edges) each course has. If a course has an in-degree of 0, it means there are no prerequisites for it, and it can be taken immediately.

// Queue Initialization: We initialize a queue with all courses that have an in-degree of 0. These courses can be taken without any prerequisites, so we start with them.

// Processing the Queue: As long as there are courses in the queue, we remove one course and mark it as completed. Then, we decrease the in-degree of all courses that depend on this course. If any of those dependent courses now have an in-degree of 0, they are added to the queue because they can be taken next.

// Cycle Detection: If after processing all the courses, the number of courses we've completed (count) is equal to numCourses, it means there is no cycle, and we can finish all courses. Otherwise, if we can't process all courses (i.e., count is less than numCourses), then a cycle exists, and it's impossible to complete all courses.

// Example Walkthrough:
// Example 1:

// javascript
// Copy code
// numCourses = 2, prerequisites = [[1, 0]];
// The graph is:

// css
// Copy code
// 0 -> [1]
// 1 -> []
// The in-degree array is [0, 1]. We start with course 0 (in-degree 0), process it, and then course 1 becomes available. We can finish both courses, so the result is true.

// Example 2:

// javascript
// Copy code
// numCourses = 2, prerequisites = [[1, 0], [0, 1]];
// The graph is:

// css
// Copy code
// 0 -> [1]
// 1 -> [0]
// The in-degree array is [1, 1]. No course can be taken initially because both courses have non-zero in-degrees. The queue remains empty, and we cannot process any courses, so the result is false.

// Time Complexity:
// O(V + E), where V is the number of courses (vertices) and E is the number of prerequisites (edges). This is because we traverse all edges and nodes once while building the graph and processing the queue.
// Space Complexity:
// O(V + E), as we store the graph and in-degree array.
