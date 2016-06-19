//##############################################################################################
// CODILITY PROBLEMS www.codility.com/programmers
//##############################################################################################

//==============================================================================================
// Lesson 5 - Prefix Sums
//==============================================================================================

//----------------------------------------------------------------------------------------------
// L5 - Passing Cars
//----------------------------------------------------------------------------------------------

/*
A non-empty zero-indexed array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

Array A contains only 0s and/or 1s:

0 represents a car traveling east,
1 represents a car traveling west.
The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

For example, consider array A such that:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

Write a function:

function solution(A);
that, given a non-empty zero-indexed array A of N integers, returns the number of pairs of passing cars.

The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

For example, given:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
the function should return 5, as explained above.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer that can have one of the following values: 0, 1.
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
*/


// Passing Cars - given a non-empty zero-indexed array A of N binary integers (representing consecutive cars seen on a stretch of highway one after the other, 0 - car going east, 1 - car going west), returns the number of pairs of passing cars (cars that pass each other). 
// e.g. [0101110] represents a stretch of highway where starting at one end, the cars are faced -> <- -> <- <- <- ->. How many passings will occur?
// solution: starting from W to E (going down Array), if you see an eastbound car, increment eastbound cars by 1 and if you see an westbound car, increment total of cars passing each other by the TOTAL of eastbound cars seen so far (because all these cars will be passing that westbound car). 
function passingCars(A) {
	var i, eastboundCar = 0, carsPassingEachOther = 0;
	
	// go W to E 
	for (i = 0; i < A.length; i++) {
		// found car going E, keep track, this number of cars will pass any car going W
		if (A[i] === 0) {
			eastboundCar++;
		} else {
			// found a car going W, will pass every car going E tracked earlier.
			carsPassingEachOther += eastboundCar;
			// escape clause
			if (carsPassingEachOther > 1000000000) {
				return -1;
			}
			
		}
	}  
	return carsPassingEachOther;
}