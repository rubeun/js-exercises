//##############################################################################################
// CODILITY PROBLEMS www.codility.com/programmers
//##############################################################################################

//==============================================================================================
// Lesson 6 - Sorting
//==============================================================================================

//----------------------------------------------------------------------------------------------
// L6 - Max Product of Three
//----------------------------------------------------------------------------------------------

/*
A non-empty zero-indexed array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

For example, array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
contains the following example triplets:

(0, 1, 2), product is −3 * 1 * 2 = −6
(1, 2, 4), product is 1 * 2 * 5 = 10
(2, 4, 5), product is 2 * 5 * 6 = 60
Your goal is to find the maximal product of any triplet.

Write a function:

function solution(A);
that, given a non-empty zero-indexed array A, returns the value of the maximal product of any triplet.

For example, given array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
the function should return 60, as the product of triplet (2, 4, 5) is maximal.

Assume that:

N is an integer within the range [3..100,000];
each element of array A is an integer within the range [−1,000..1,000].
Complexity:

expected worst-case time complexity is O(N*log(N));
expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
*/

// Max Product of Three - Optimal
function maxProductOfThree(A) {
	var len = A.length;

	// if only 3
	if (len === 3) {
		return A[0]*A[1]*A[2];
	}
	
	// sort numerically so that largest numbers are to the ends of the array. Then check products of the last 3 digits
	A.sort(function(a,b) { return a-b; });

	// Check if 2 lowest extremes are negative integers, then their signs cancel, so check if their product is higher than 2 highest integers	
	if ((A[0] * A[1] * A[len-1]) > (A[len-3]*A[len-2])* A[len-1]) {
		return A[0] * A[1] * A[len-1];		
	} else {
		return A[len-3]*A[len-2]*A[len-1];	
	}
	
}


// Max Product of Three - given a non-empty zero-indexed array A, returns the value of the maximal product of any triplet
function maxProductOfThree2(A) {
	var i, integersProduct, highestProduct = null, len = A.length;
	
	// corner cases
	if (len < 2) {
		return 0;
	} 
	
	if (len === 3) {
		return A[0]*A[1]*A[2];
	}
	
	// sort numerically
	A.sort(function(a,b) { return a-b; });

	// Check if 2 lowest extremes are negative integers, then signs cancel, check if their product is higher than 2 highest integers	
	if (A[0]<0 && A[1]<0 && A[len-1]>0) {
		if ((A[0] * A[1]) > (A[len-2]*A[len-1])) {
			return A[0]*A[1]*A[len-1];			
		} else if ((A[0] * A[1] * A[len-1]) > (A[len-3]*A[len-2])* A[len-1]) {
			return A[0] * A[1] * A[len-1];		
		}
	}	

	// Check if all numbers are negative,
	if (A[0]<0 && A[1]<0 && A[len-1]>0) {
		if ((A[0] * A[1]) > (A[len-2]*A[len-1])) {
			return A[0]*A[1]*A[len-1];			
		}
	}	


	for(i=0; i < len-2; i++) {		
		integersProduct = A[i]*A[i+1]*A[i+2];
		if ((highestProduct === null) || (integersProduct > highestProduct)) {
			highestProduct = integersProduct;
		} 
	} 
	return highestProduct;
}