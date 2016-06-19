//##############################################################################################
// CODILITY PROBLEMS www.codility.com/programmers
//##############################################################################################

//==============================================================================================
// Lesson 6 - Sorting
//==============================================================================================

//----------------------------------------------------------------------------------------------
// L6 - Distinct
//----------------------------------------------------------------------------------------------

/*
Write a function

function solution(A);
that, given a zero-indexed array A consisting of N integers, returns the number of distinct values in array A.

Assume that:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
For example, given array A consisting of six elements such that:

A[0] = 2    A[1] = 1    A[2] = 1
A[3] = 2    A[4] = 3    A[5] = 1
the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.

Complexity:

expected worst-case time complexity is O(N*log(N));
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
*/

// Distinct - given a zero-indexed array A consisting of N integers, returns the number of distinct values in array A
function distinct(A) {
	var i, len = A.length, distinctNumbers = 0;
	
	// corner cases
	if (len < 1) {
		return 0;
	}
	
	// sort numerically so that duplicate numbers can be skipped over with a simple A[i] - A[i+1] === 0 check
	A.sort(function(a,b) { return a-b;});
	
	for (i=0; i < A.length-1; i++) {
		// if 2 consecutive numbers are not duplicate, increment distinct number count
		if ((A[i] - A[i+1]) !== 0) {
			distinctNumbers++;
		}
		
	}
	console.log(distinctNumbers +1);
	return distinctNumbers + 1;
}