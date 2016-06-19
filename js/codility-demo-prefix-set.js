//##############################################################################################
// CODILITY PROBLEMS www.codility.com/programmers
//##############################################################################################

//===============================================
// Demo Problems
//===============================================

//-----------------------------------------------
// Prefix Set
//-----------------------------------------------


// PrefixSet - Given a table A of N integers from 0 to N-1 calculate the smallest such index P, that that {A[0],...,A[N-1]} = {A[0],...,A[P]}
function prefixSet(A) {
	var i, lastIndex = 0, numberCount = 0, len = A.length, distinctNumbers = [];
	
	for (i=0; i < len; i++) {
		if (!distinctNumbers[A[i]]) {
			distinctNumbers[A[i]] = true;			
			lastIndex = i;
		}
	}
	return lastIndex;
}