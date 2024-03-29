// Medium
// 715
// 92
// company
// Bloomberg
// company
// Google
// company
// Amazon
// Design a Leaderboard class, which has 3 functions:

// addScore(playerId, score): Update the leaderboard by adding score to the given player's score. If there is no player with such id in the leaderboard, add him to the leaderboard with the given score.
// top(K): Return the score sum of the top K players.
// reset(playerId): Reset the score of the player with the given id to 0 (in other words erase it from the leaderboard). It is guaranteed that the player was added to the leaderboard before calling this function.
// Initially, the leaderboard is empty.



// Example 1:

// Input:
// ["Leaderboard","addScore","addScore","addScore","addScore","addScore","top","reset","reset","addScore","top"]
// [[],[1,73],[2,56],[3,39],[4,51],[5,4],[1],[1],[2],[2,51],[3]]
// Output:
// [null,null,null,null,null,null,73,null,null,null,141]

// Explanation:
// Leaderboard leaderboard = new Leaderboard ();
// leaderboard.addScore(1,73);   // leaderboard = [[1,73]];
// leaderboard.addScore(2,56);   // leaderboard = [[1,73],[2,56]];
// leaderboard.addScore(3,39);   // leaderboard = [[1,73],[2,56],[3,39]];
// leaderboard.addScore(4,51);   // leaderboard = [[1,73],[2,56],[3,39],[4,51]];
// leaderboard.addScore(5,4);    // leaderboard = [[1,73],[2,56],[3,39],[4,51],[5,4]];
// leaderboard.top(1);           // returns 73;
// leaderboard.reset(1);         // leaderboard = [[2,56],[3,39],[4,51],[5,4]];
// leaderboard.reset(2);         // leaderboard = [[3,39],[4,51],[5,4]];
// leaderboard.addScore(2,51);   // leaderboard = [[2,51],[3,39],[4,51],[5,4]];
// leaderboard.top(3);           // returns 141 = 51 + 51 + 39;

1. Create in a class a hashMap scores to keep track playerId, scores
2. in addScore method check if the playerId exists in hashMap if yes, update the score, if it doesnt exist add it
3. In top(K) method, create variable and make a copy of this.scores.values()and sorted in descending order
4. iterate over the top 5 values and add it to the sum variable, return sum
5. in reset method delete playerId from the hashmap;


class Leaderboard {
    constructor() {
        this.scores = new Map()
    }

    addScore(playerId, score) {
        if (this.scores.has(playerId)) {
            this.scores.set(playerId, this.scores.get(playerId) 
            + score) 
        } else {
            this.scores.set(playerId, score)
        }
    }


    top(K) {
        let sortedScores = [...this.scores.values()].sort((a,b) => b - a)
        let sum = 0
        for (let i = 0; i < K && i < sortedScores.length; i++) {
            sum += sortedScores[i]
        }
        return sum
    }


    reset(playerId) {
        this.scores.delete(playerId)
    }
}
Leaderboard.prototype.addScore = function(playerId, score) {
    if (!this.scores.has(playerId)) {
        this.scores.set(playerId, 0); // Initialize the player's score to 0 if not present.
        this.players.push(playerId); // Add the player ID to the players array.
    }
    this.scores.set(playerId, this.scores.get(playerId) + score); // Add the provided score to the player's total score.
    return;
};

Leaderboard.prototype.top = function(K) {
    this.players.sort((a, b) => this.scores.get(b) - this.scores.get(a)); // Sort players array based on scores in descending order.

    let i = 0;
    let sum = 0;

    while (i < K) {
        const player = this.players[i++]; // Get the player ID at the current index.
        sum += this.scores.get(player); // Add the player's score to the sum.
    }

    return sum; // Return the sum of the top K players' scores.
};

Leaderboard.prototype.reset = function(playerId) {
    this.scores.set(playerId, 0); // Reset the player's score to 0.
};


// chatgtp solutions
class Leaderboard {
    constructor() {
        // Create a map to store player scores with playerId as keys and scores as values.
        this.scores = new Map();
    }

    addScore(playerId, score) {
        if (this.scores.has(playerId)) {
            // If player already exists, add the new score to the existing score.
            this.scores.set(playerId, this.scores.get(playerId) + score);
        } else {
            // If player doesn't exist, add the player with the given score.
            this.scores.set(playerId, score);
        }
    }

    top(K) {
        // Get an array of all player scores and sort them in descending order.
        const sortedScores = [...this.scores.values()].sort((a, b) => b - a);

        // Sum up the top K scores.
        let sum = 0;
        for (let i = 0; i < K && i < sortedScores.length; i++) {
            sum += sortedScores[i];
        }

        return sum;
    }

    reset(playerId) {
        // Reset the player's score to 0 or remove the player from the scores map.
        this.scores.delete(playerId);
    }
}

// Example usage
const leaderboard = new Leaderboard();
leaderboard.addScore(1, 73);
leaderboard.addScore(2, 56);
leaderboard.addScore(3, 39);
leaderboard.addScore(4, 51);
leaderboard.addScore(5, 4);
console.log(leaderboard.top(1)); // Output: 73
leaderboard.reset(1);
leaderboard.reset(2);
leaderboard.addScore(2, 51);
console.log(leaderboard.top(3)); // Output: 141




class Leaderboard {
    constructor() {
        this.players = {}; // Object to store player scores
        this.heap = [];    // Max heap to maintain leaderboard
    }

    addScore(playerId, score) {
        if (playerId in this.players) {
            this.players[playerId] += score; // Update existing player's score
            this._addToHeap(playerId);       // Maintain heap after score update
        } else {
            this.players[playerId] = score;  // Add new player with score
            this.heap.push({ playerId, score }); // Add to heap
            this._heapifyUp(this.heap.length - 1); // Maintain max heap property
        }
    }

    top(K) {
        let totalScore = 0;
        for (let i = 0; i < K; i++) {
            if (this.heap.length > 0) {
                totalScore += this.heap[0].score; // Accumulate top score
                this._removeFromHeap(); // Remove top score player from heap
            }
        }
        return totalScore;
    }

    reset(playerId) {
        if (playerId in this.players) {
            this.players[playerId] = 0; // Reset player's score
            this._addToHeap(playerId);  // Maintain heap after score reset
        }
    }

    _heapifyUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2); // Calculate parent index
            if (this.heap[parentIndex].score >= this.heap[index].score) {
                break; // Exit loop if max heap property is satisfied
            }
            // Swap parent and child elements
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex; // Move to parent index
        }
    }

    _removeFromHeap() {
        if (this.heap.length > 1) {
            this.heap[0] = this.heap.pop(); // Replace top element with last element
            this._heapifyDown(0); // Maintain max heap property after removal
        } else {
            this.heap.pop(); // Remove the only element in the heap
        }
    }

    _heapifyDown(index) {
        const leftChildIndex = 2 * index + 1; // Calculate left child index
        const rightChildIndex = 2 * index + 2; // Calculate right child index
        let largest = index; // Assume the current index has the largest value

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].score > this.heap[largest].score) {
            largest = leftChildIndex; // Update largest if left child is larger
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].score > this.heap[largest].score) {
            largest = rightChildIndex; // Update largest if right child is larger
        }

        if (largest !== index) {
            // Swap current element with the largest child
            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
            this._heapifyDown(largest); // Recursively maintain max heap property
        }
    }

    _addToHeap(playerId) {
        for (let i = 0; i < this.heap.length; i++) {
            if (this.heap[i].playerId === playerId) {
                this.heap.splice(i, 1); // Remove player's entry from heap
                this._heapifyDown(i); // Maintain max heap property after removal
                break;
            }
        }
        // Add updated player's entry to the heap
        this.heap.push({ playerId, score: this.players[playerId] });
        this._heapifyUp(this.heap.length - 1); // Maintain max heap property after addition
    }
}

// Testing
const leaderboard = new Leaderboard();
leaderboard.addScore(1, 73);
leaderboard.addScore(2, 56);
leaderboard.addScore(3, 39);
leaderboard.addScore(4, 51);
leaderboard.addScore(5, 4);
console.log(leaderboard.top(1));  // Output: 73
leaderboard.reset(1);
leaderboard.reset(2);
leaderboard.addScore(2, 51);
console.log(leaderboard.top(3));  // Output: 141
