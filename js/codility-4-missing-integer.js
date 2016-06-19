//##############################################################################################
// CODILITY PROBLEMS www.codility.com/programmers
//##############################################################################################

//==============================================================================================
// Lesson 4 - Counting Elements
//==============================================================================================

//----------------------------------------------------------------------------------------------
// L4 - Missing Integer
//----------------------------------------------------------------------------------------------

/*
Write a function:

function solution(A);
that, given a non-empty zero-indexed array A of N integers, returns the minimal positive integer (greater than 0) that does not occur in A.

For example, given:

  A[0] = 1
  A[1] = 3
  A[2] = 6
  A[3] = 4
  A[4] = 1
  A[5] = 2
the function should return 5.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
*/


// Missing Integer - given a non-empty zero-indexed array A of N integers, returns the minimal positive integer (greater than 0) that does not occur in A
function missingInteger(A) {

	var distinctIntegerObject = [], len = A.length;
	
	// corner cases
	if (A.length == 1) {
		if ((A[0] > 1) || (A[0] < 1)) {
			return 1;
		} else {
			return 2;
		}	
	}
	
	for (i = 0; i < len; i++) {
		
		distinctIntegerObject[A[i]-1] = true;		
	
	}	
		
	for (i = 0; i < len; i++) {
		if (distinctIntegerObject[i] !== true) {
			return i + 1;
		}
		
	}
	return len+1;	
	
}