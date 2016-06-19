
//##############################################################################################
// Leetcode Exercises  https://leetcode.com/problems/
//##############################################################################################

//==============================================================================================
// Chapter 4
//==============================================================================================


//----------------------------------------------------------------------------------------------
// 4 - 27 Minimum Depth of Binary Tree - INCOMPLETE
//----------------------------------------------------------------------------------------------

/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
*/

var minDepth = function(root) {

	if (root === null) {
		return 0;
	} 
	
	if ((root.left === null) && (root.right === null)) {
		return 1;
	}
	
	var leftHeight = minDepth(root.left);
	var rightHeight = minDepth(root.right);
	
	return Math.min(leftHeight, rightHeight) + 1;
    
};