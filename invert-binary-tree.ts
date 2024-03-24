function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  const left = invertTree(root.left);

  root.left = invertTree(root.right);
  root.right = left;

  return root;
}
