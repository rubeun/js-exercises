//##############################################################################################
// CODILITY PROBLEMS www.codility.com/programmers
//##############################################################################################

//==============================================================================================
// Lesson 9 - Maximum Slice Problem
//==============================================================================================

//----------------------------------------------------------------------------------------------
// Max Slice Sum
//----------------------------------------------------------------------------------------------


// MaxSliceSum - Optimal solution #WEB# - given an array A consisting of N integers, returns the maximum sum of any slice of A
function maxSliceSum2(A) {
	var i, maxA, maxEnding = 0, maxSlice = 0, len = A.length;

	// Find the largest value in array
	maxA = Math.max.apply(Math, A);
	
   if (maxA > 0) {
   	
   	for (i=0; i < len; i++){
  			maxEnding = Math.max(0, maxEnding + A[i]);
  			maxSlice = Math.max(maxSlice, maxEnding); 	
   	} 
   } else {
		maxSlice = maxA;
   	
   }	
	
	return maxSlice;
}



// MaxSliceSum - given an array A consisting of N integers, returns the maximum sum of any slice of A 
function maxSliceSum(A) {
	var i, maxEnding = 0, maxSlice = 0, len = A.length;

	// corner cases
	if (len === 0) {
		return 0;
	}
	if (len === 1) {
		return A[0];
	}	
	if ( (len === 2) && (A[0] === A[1]) ) {
		if (A[0] < 0) {
			return A[0];	
		} else {
			return A[0] + A[1];
		}
	}
	
	// 	
	for (i=0; i< len; i++) {
		maxEnding = Math.max(0, maxEnding + A[i]);
		maxSlice = Math.max(maxSlice, maxEnding);
	
	}
	return maxSlice;
}
