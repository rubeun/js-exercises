//##############################################################################################
// CODILITY PROBLEMS www.codility.com/programmers
//##############################################################################################

//==============================================================================================
// Lesson 2 - Arrays
//==============================================================================================

//----------------------------------------------------------------------------------------------
// L2 - Cyclic Rotation
//----------------------------------------------------------------------------------------------

/*
A zero-indexed array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is also moved to the first place.

For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]. The goal is to rotate array A K times; that is, each element of A will be shifted to the right by K indexes.

Write a function:

function solution(A, K);
that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times.

For example, given array A = [3, 8, 9, 7, 6] and K = 3, the function should return [9, 7, 6, 3, 8].

Assume that:

N and K are integers within the range [0..100];
each element of array A is an integer within the range [−1,000..1,000].
*/


//Cyclic Rotation - return an Array of numbers after it has been rotated to the right K places
function rotateArrayToRightKPlaces(A, K) {
	
	// set originalArray, length of array and an empty array.
	var originalArray = A.slice();
	var arrayLen = originalArray.length;
	var copyArray = [];
	
	if (arrayLen <= K) {
		// At least one full rotation	
		
		var moveRight = K % arrayLen;
		if (moveRight === 0) {
			return originalArray;
		}
		for (var i=0; i < moveRight; i++) {
			var rightmostNumber = originalArray.pop();
			copyArray.unshift(rightmostNumber);
		}	
		// Merge copyArray to the front of originalArray
		return copyArray.concat(originalArray);	
	
	} else {
		// Will not fully rotate, only rotate K times
		for (i=0; i < K; i++) {
			rightmostNumber = originalArray.pop();
			copyArray.unshift(rightmostNumber);
		}	
		// Merge copyArray to the front of originalArray
		return copyArray.concat(originalArray);
	}		
}