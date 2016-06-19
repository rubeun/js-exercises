//##############################################################################################
// CODILITY PROBLEMS www.codility.com/programmers
//##############################################################################################

//==============================================================================================
// Lesson 1 - Iterations
//==============================================================================================

//----------------------------------------------------------------------------------------------
// L1 - Binary Gap
//----------------------------------------------------------------------------------------------

/*
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps.

Write a function:

function solution(N);
that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5.

Assume that:

N is an integer within the range [1..2,147,483,647].
Complexity:

expected worst-case time complexity is O(log(N));
expected worst-case space complexity is O(1).

*/


var equiv = [-1, 3, -4, 5, 1, -6, 2, 1];
//equiv.sort(function(a, b){return a-b});
//equiv.reverse();
var equivIndex = [];
var len = equiv.length;

// Binary Gap - Maximum number of 0's in between 1's in a number N's binary representation
function binaryGap(N) {

	// convert number N to binary, split binary number into array of digits, get length of array
	var binary = (N >>> 0).toString(2);
	var binarray = (""+binary).split("");
	var binlen = binarray.length;
	
	return binarray;
		
	// set best length between 1's so far, current length between 1's
	var bestlength = 0;
	var currentlength = 0;
	var gapStarted = false;
	var gapFound = false;
	
	// traverse array, when 0 is found, increment count, check if current length is best length, if so replace best length
	// if 1 is found, reset current length and wait for another 0.	
	for (var i=0; i < binlen; i++) {
		if (binarray[i] == "0") {
			currentlength = currentlength + 1;
			if (bestlength <= currentlength) {
				bestlength = currentlength;
			}
		} else {
			// found a 1. reset count. and set gap found if a prior 1 was found with some 0's in between
			if ( (gapStarted === true) && (bestlength > 0) ) {
				gapFound = true;
			}	
			gapStarted = true;
			currentlength = 0;	
		}	
								
	}
	if (gapFound) {
		return bestlength;
	} else {
		return 0;
	}
}