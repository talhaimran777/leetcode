// Initial Version
//
// function maxDepth(root: TreeNode | null): number {
//   if (!root) return 0;
//
//   const leftMax = maxDepth(root.left);
//   const rightMax = maxDepth(root.right);
//
//   return Math.max(leftMax, rightMax) + 1;
// }


// Refactored Version
//
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
