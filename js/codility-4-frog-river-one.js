//##############################################################################################
// CODILITY PROBLEMS www.codility.com/programmers
//##############################################################################################

//==============================================================================================
// Lesson 4 - Counting Elements
//==============================================================================================

//----------------------------------------------------------------------------------------------
// L4 - Frog River One
//----------------------------------------------------------------------------------------------

/*
A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.

You are given a zero-indexed array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.

The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.

For example, you are given integer X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.

Write a function:

function solution(X, A);
that, given a non-empty zero-indexed array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.

If the frog is never able to jump to the other side of the river, the function should return −1.

For example, given X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
the function should return 6, as explained above.

Assume that:

N and X are integers within the range [1..100,000];
each element of array A is an integer within the range [1..X].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(X), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
*/


// Frog River One - given a non-empty zero-indexed array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river. Array A values are the position of leaf from 1 to X and whose index is time in seconds. 
function frogRiverOne1(X, A) {
	
	//corner cases
	if (A.length === 1 && X === 1) {
		return 0;
	}
	
	// create list of all leave numbers needed to jump from 1 to X
	var comparisonArray = [];
	for (var i=0; i < X; i++) {
		comparisonArray[i] = i+1;
	}
	
	// traverse list A to see what leaves have landed
	for (i=0; i < A.length; i++) {
		// have all the needed leaves landed?
		if (comparisonArray.length !== 0) {
			var comparisonArrayIndex = comparisonArray.indexOf(A[i]);
			if (comparisonArrayIndex !== -1) {
				comparisonArray.splice(comparisonArrayIndex,1);					
			} 
		
		} else {
			// all leaves landed, return time minus 1 second because became empty at previous second
			return i-1;				
		}
				
	}
	return -1;
}


// Frog River One - #WEB# Optimal solution with only one For Loop. countIndex keeps track of unique 
function frogRiverOne2(X, A) {
    var i, count = {}, countIndex = 0, index = 0;
    for (i = 0; i < A.length; i++) {
        index = A[i] - 1;
        if (A[i] <= X && !count[index]) {
                count[index] = true;
                countIndex++;
                if (countIndex === X) return i;
        }
    }
    return -1;
}