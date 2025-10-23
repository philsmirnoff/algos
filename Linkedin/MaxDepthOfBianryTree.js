// Definition for a binary tree node.
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Max depth via recursion.
 * Idea: depth(root) = 1 + max(depth(left), depth(right)); depth(null)=0
 */
function maxDepth(root) {
  if (root === null) return 0; // base case: empty subtree
  const leftDepth = maxDepth(root.left); // depth of left subtree
  const rightDepth = maxDepth(root.right); // depth of right subtree
  return 1 + Math.max(leftDepth, rightDepth); // current node adds 1
}

// Why it works

// For each node, the deepest path through it is 1 (itself) + the deeper of its left/right subtrees.

// Complexity

// Time: O(n) — visit each node once.

// Space: O(h) for recursion stack (h = tree height; worst O(n) for skewed tree, O(log n) for balanced).


 * Max depth via BFS (queue): number of levels.
 */
function maxDepthBFS(root) {
  if (root === null) return 0;

  const queue = [root];
  let depth = 0;

  while (queue.length) {
    const levelSize = queue.length; // nodes in this level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++; // finished one level
  }

  return depth;
}

// Why it works

// BFS visits the tree level by level; the number of levels processed equals the depth.

// Complexity

// Time: O(n) — each node enqueued/dequeued once.

// Space: O(w) — max queue size equals tree’s max width (worst O(n)).
