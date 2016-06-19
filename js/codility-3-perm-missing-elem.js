//##############################################################################################
// CODILITY PROBLEMS www.codility.com/programmers
//##############################################################################################

//==============================================================================================
// Lesson 3 - Time Complexity
//==============================================================================================

//----------------------------------------------------------------------------------------------
// L3 - Perm Missing Elem
//----------------------------------------------------------------------------------------------

/*
A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);
that, given a zero-indexed array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
*/


// find missing element - given a zero-indexed array A, returns the value of the missing element. Always starts from 1
function permMissingElem (A) {

	// corner cases
	if (A.length === 0) {
		return 1;
	} else if (A.length === 1 && A[0] == 1) {
		return 2;
	} else if (A.length === 1 && A[0] == 2) {
		return 1;
	}

	// numerical sort
	A.sort(function(a,b) { return a-b; });

	// if first element missing
	if (A[0] == 2) {
		return 1;
	}
	
	for (var i=0; i < A.length; i++) {
		if (A[i+1]-A[i] != 1) {
			return A[i]+1;
		}
		
	}

}

// Simpler code but slower O(n ** 2)
function permMissingElem2(A) {
	var comparisonArray = [];
	
	for (var i=0; i < A.length +1; i++) {
		comparisonArray[i] = i+1;
	}

	for (i=0; i < comparisonArray.length; i++) {
		if (A.indexOf(comparisonArray[i]) === -1) {
			return comparisonArray[i];
		} 
	
	}

}