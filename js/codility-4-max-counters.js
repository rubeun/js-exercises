//##############################################################################################
// CODILITY PROBLEMS www.codility.com/programmers
//##############################################################################################

//==============================================================================================
// Lesson 4 - Counting Elements
//==============================================================================================

//----------------------------------------------------------------------------------------------
// L4 - Max Counters
//----------------------------------------------------------------------------------------------

/*
You are given N counters, initially set to 0, and you have two possible operations on them:

increase(X) − counter X is increased by 1,
max counter − all counters are set to the maximum value of any counter.
A non-empty zero-indexed array A of M integers is given. This array represents consecutive operations:

if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
if A[K] = N + 1 then operation K is max counter.
For example, given integer N = 5 and array A such that:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the values of the counters after each consecutive operation will be:

    (0, 0, 1, 0, 0)
    (0, 0, 1, 1, 0)
    (0, 0, 1, 2, 0)
    (2, 2, 2, 2, 2)
    (3, 2, 2, 2, 2)
    (3, 2, 2, 3, 2)
    (3, 2, 2, 4, 2)
The goal is to calculate the value of every counter after all operations.

Write a function:

function solution(N, A);
that, given an integer N and a non-empty zero-indexed array A consisting of M integers, returns a sequence of integers representing the values of the counters.

The sequence should be returned as:

a structure Results (in C), or
a vector of integers (in C++), or
a record Results (in Pascal), or
an array of integers (in any other programming language).
For example, given:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the function should return [3, 2, 2, 4, 2], as explained above.

Assume that:

N and M are integers within the range [1..100,000];
each element of array A is an integer within the range [1..N + 1].
Complexity:

expected worst-case time complexity is O(N+M);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
*/

// Max Counters - My solution using Array mapping function
function maxCounters1(N, A) {
	
	var i, countIndex = 0, index = 0, highestNumber = 0;
	
	// preset array of N to have value 0
	var count = Array.apply(null, Array(N)).map(Number.prototype.valueOf,0);
	
	for (i = 0; i < A.length; i++) {
		index = A[i] - 1;
		if (A[i] <= N) {
			count[index] = count[index] + 1;
			if (count[index] > highestNumber) {
				highestNumber = count[index];		
			}
		} else {
			//set all counts to highest number so far
			count = Array.apply(null, Array(N)).map(Number.prototype.valueOf,highestNumber);			
		}
	}
	
	return count;
}

// Max Counters - #WEB# Optimal but tricky solution from Web
function maxCounters2(N, A) {
	// N = nr of counters
	// M = length of array A

    var RESULT = new Array(N);
    var len = A.length;

    for (var i=0; i < RESULT.length; i++) { // O(N) init whole array of counters to 0
        RESULT[i] = 0;
    }

    var max = 0;
    var accum = 0;

    for (i=0; i < len; i++) { // O(M) loop over all A
        var item = A[i]; // current counter to modify
        if (item == N+1) { // set all to max found so far
            max = accum; // don't do max until the end, keep track of last max found
        } else if (item <= N) { // increment one counter
            if (RESULT[item-1] < max) RESULT[item-1] =+ max; //?

            RESULT[item-1]++; // increment one counter

				// find accum = max value found so far in this loop
            if (accum < RESULT[item-1]) accum = RESULT[item-1];
        }
    }

		// Don't do max operation until here. 
    for (i=0; i < RESULT.length; i++) { // O(N) set all elements of A to max found
        if (RESULT[i] <= max) RESULT[i] = max;
    }

    return RESULT;
}