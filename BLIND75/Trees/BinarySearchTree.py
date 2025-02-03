class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None

def searchBST(root, target):
  if not root:
    return False

  if target < root.val:
    return searchBST(root.left, target)
  elif target > root.val:
    return searchBST(root.right, target)
  else:
    return True


def insert(root, val):
  if not root:
    return TreeNode(val)

  if val < root.val:
    root.left = insert(root.left, val)
  elif val > root.val:
    root.right = insert(root.right, val)

  return root


def minValueNode(root):
  curr = root

  while curr and curr.left:
    curr = curr.left
  return curr

# // case 1: 0 or 1 Child
# // case 2: 2 Children
# // case 2.1: Find the inorder successor of the node to be deleted
# // case 2.2: Copy the inorder successor's content to the node to be deleted
# // case 2.3: Delete the inorder successo
# easy case is number 1. when the node that we want to delete has 0 or 1 child, the more difficult case is when we want to remove two children
# what if we need to remove node 3 that has one left child: we wll check if ode 3 has a left child, if it does, we will replace node 3 with its left child and return left child, so when we get back up to the parent, instead of pointing at node 3, it will point to node 2 value.
# now har case when we want to remove node 6 that have two children, we will cheeck if the left pointer null, nope, so we will check if the right pointer is null, nope, so if we remove 6 it will disconnect everutyhting from root entire subtree that is not what we want to do. we can replace with either of these nodes node 6. we will replace node.val 6 with node 7 and recursevely call remove function on right subtree of of node 6 (it will be node 7)
# what if we need to remove root node, we will replace root node with the smallest value in the right subtree, so we will find the smallest value in the right subtree and replace the root value with the smallest value in the right subtree and remove the smallest value in the right subtree
def remove(root, val):
  if not root:
    return root

  if val < root.val:
    root.left = remove(root.left, val)
  elif val > root.val:
    root.right = remove(root.right, val)
  else:
    if not root.left:
      return root.right
    elif not root.right:
      return root.left

    temp = minValueNode(root.right)
    root.val = temp.val
    root.right = remove(root.right, temp.val)

  return root


# Constructing a simple BST
root = TreeNode(5)
root.left = TreeNode(3)
root.right = TreeNode(8)
root.left.left = TreeNode(2)
root.left.right = TreeNode(4)
root.right.left = TreeNode(7)
root.right.right = TreeNode(9)

print(searchBST(root, 4))  # Output: True
print(searchBST(root, 6))  # Output: False

insert(root, 6)
print(searchBST(root, 6))  # Output: True

