//##############################################################################################
// CODILITY PROBLEMS www.codility.com/programmers
//##############################################################################################

//==============================================================================================
// Lesson 5 - Prefix Sums
//==============================================================================================

//----------------------------------------------------------------------------------------------
// L5 - Count Div
//----------------------------------------------------------------------------------------------

/*
Write a function:

function solution(A, B, K);
that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }
For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Assume that:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
Complexity:

expected worst-case time complexity is O(1);
expected worst-case space complexity is O(1).
*/


// Count Div - given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K 
function countDiv(A, B, K) {
	var numbersDivisByK = 0;

	// go down the array from A to B and divide it by K, incrementing counter when divisible		
	for (var i = A; i <= B; i++) {
		if((i % K) === 0) {
			numbersDivisByK++;	
		}
		
	}
	return numbersDivisByK;
}

// Count Div - Optimal solution. Based on some mathematical formula.
function countDiv2(A, B, K) {
	if ( ((A % K) === 0) ) {
		return Math.floor(((B - A)/K + 1));
	} else {
		return Math.floor(((B - (A - (A % K) ))/K));
	}
}