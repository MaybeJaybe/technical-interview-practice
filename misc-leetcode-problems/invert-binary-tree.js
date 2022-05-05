/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  let nodeList = []
  let node = root
  while (node != null) {
    let left = (node.left===undefined ? null : node.left)
    let right = (node.right===undefined ? null : node.right)
          node.right = left
      if (node.right!==null) {
          nodeList.push(node.right)
      }
     node.left = right
      if (node.left!==null) {
          nodeList.push(node.left)
      }
   node = nodeList.pop()
  }
  return root
};