
//##############################################################################################
// Leetcode Exercises  https://leetcode.com/problems/
//##############################################################################################

//==============================================================================================
// Chapter 4
//==============================================================================================


//----------------------------------------------------------------------------------------------
// 4 - 26 Maximum Depth of Binary Tree
//----------------------------------------------------------------------------------------------

/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/


/* Test Case to be Fixed
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var tree1 = new TreeNode(6);
tree1.left = new TreeNode(3);
tree1.right = new TreeNode(10);
tree1.left.left = 2;
tree1.left.right = 5;
tree1.right.left = 7;
tree1.right.right = new TreeNode(13);
tree1.right.right.left = 12;
*/

var maxDepth = function(root) {

	if (root === null) {
		return 0;
	} 
	
	var leftHeight = maxDepth(root.left);
	var rightHeight = maxDepth(root.right);
	
	return Math.max(leftHeight, rightHeight) + 1;
    
};