//##############################################################################################
// CODILITY PROBLEMS www.codility.com/programmers
//##############################################################################################

//==============================================================================================
// Lesson 6 - Sorting
//==============================================================================================

//----------------------------------------------------------------------------------------------
// L6 - Triangle
//----------------------------------------------------------------------------------------------

/*
A zero-indexed array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

A[P] + A[Q] > A[R],
A[Q] + A[R] > A[P],
A[R] + A[P] > A[Q].
For example, consider array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
Triplet (0, 2, 4) is triangular.

Write a function:

function solution(A);
that, given a zero-indexed array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

For example, given array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
the function should return 1, as explained above. Given array A such that:

  A[0] = 10    A[1] = 50    A[2] = 5
  A[3] = 1
the function should return 0.

Assume that:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
Complexity:

expected worst-case time complexity is O(N*log(N));
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
*/

// Triangle - #Inefficient# given a zero-indexed array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise
function triangle(A) {		// O(n^3)
	var p,q,r, n = A.length;
	
	// Inefficiently traverse triple nested loops for all 3 triplet lengths 
	if (n > 2) {
		
		for (p=0;p<n;p++) {
			
			for (q=p+1;q<n;q++) {
			
				for (r=q+1;r<n;r++) {
					// check conditions for triangular triplet and exit with 1 if triangle found
					if ( (A[p]+A[q]>A[r]) && (A[q]+A[r]>A[p]) && (A[r]+A[p]>A[q]) ) {
						return 1;					
					} 	
				}
			
			}
		}	
	} 
	return 0;
}

// Triangle - #WEB# Optimal Solution (not sure why it doesn't check variations other than A[i] + A[i+1] > A[i+2])
function triangle2(A) {
	var n = A.length;
	
	// Sort numbers in array numerically
	A.sort(function(a, b){return a-b});
	
	// minimum of 3 sides for triangle
	if(A.length < 3) {
		return 0;   
	}
	
	// Doesn't check all permutations (like (A[i] + A[i+2] > A[i+3], etc.) for efficiency. Only A[i] + A[i+1] > A[i+2] 
	for (var i = 0; i < n - 2; i++) {
		if (A[i] + A[i + 1] > A[i + 2]) {
			return 1;
		}
	}
	return 0;
}