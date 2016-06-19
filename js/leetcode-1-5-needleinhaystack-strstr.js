
//##############################################################################################
// Leetcode Exercises  https://leetcode.com/problems/
//##############################################################################################

//==============================================================================================
// Chapter 1
//==============================================================================================


//----------------------------------------------------------------------------------------------
// 1 - 5 Implement strstr()  Needle in a Haystack (find pattern 'needle' in string 'haystack')
//----------------------------------------------------------------------------------------------

/*
// Super easy solution using search function
var strStr = function(haystack, needle) {
	return haystack.search(needle);
};
*/


var strStr = function(haystack, needle) {
	var i, j, 
		needleArray = [],
		needleLen = 0,
		haystackArray = [],
		haystackLen = 0,
		startIndexOfNeedle = 0,
		needleIndex = 0,
		startedNeedle = false;

	// use stack of needle to compare against haystack.
	needleArray = needle.split("");
	needleLen = needleArray.length;
	
	// haystack to traverse.
	haystackArray = haystack.split("");
	haystackLen = haystackArray.length;
	
	// Corner case
	if ( (needleLen === 0))  {
		return 0;
	} else if ( (haystackLen < needleLen) || ((haystackLen === 0) && (needleLen !== 0)) ) {
		return -1;
	} else if (needleLen === haystackLen) {
		// if needle is same length as haystack, check if they're the same
		if (needle === haystack) {
			return 0;
		} else {
			return -1;
		}
	}
	
	// Traverse haystack
	for (i=0; i < haystackLen; i++) {
		
		// Start of Needle found in Haystack, traverse needle array		
		if (haystackArray[i] === needleArray[0] ) {
			for (j=0; j < needleLen; j++) {
				// Haystack still matching Needle
				if (haystackArray[i+j] === needleArray[j]) {					
					// If reached end of needle, needle found, return index
					if(j === needleLen-1) {
						return i;
					}
				// Haystack doesn't match Needle, abandon this attempt, exit needle loop and move on
				} else {
					break;
				}
			} // End Needle Loop
			
		}
	} // End Haystack Loop
	
	// Needle not found
	return -1;

};


var strStr = function(haystack, needle) {
	var i, j, 
		needleArray = [],
		needleLen = 0,
		haystackArray = [],
		haystackLen = 0,
		startIndexOfNeedle = 0,
		needleIndex = 0,
		startedNeedle = false;

	// use stack of needle to compare against haystack.
	needleArray = needle.split("");
	needleLen = needleArray.length;
	
	// haystack to traverse.
	haystackArray = haystack.split("");
	haystackLen = haystackArray.length;
	
	// Corner case
	if ( (needleLen === 0))  {
		return 0;
	} else if ( (haystackLen < needleLen) || ((haystackLen === 0) && (needleLen !== 0)) ) {
		return -1;
	} else if (needleLen === haystackLen) {
		// if needle is same length as haystack, check if they're the same
		if (needle === haystack) {
			return 0;
		} else {
			return -1;
		}
	}
	
	// Traverse haystack
	for (i=0; i < haystackLen; i++) {
		
		// Start of Needle found in Haystack, traverse needle array		
		if (haystackArray[i] === needleArray[0] ) {
			for (j=0; j < needleLen; j++) {
				// Haystack still matching Needle
				if (haystackArray[i+j] === needleArray[j]) {					
					// If reached end of needle, needle found, return index
					if(j === needleLen-1) {
						return i;
					}
				// Haystack doesn't match Needle, abandon this attempt, exit needle loop and move on
				} else {
					break;
				}
			} // End Needle Loop
			
		}
	} // End Haystack Loop
	
	// Needle not found
	return -1;

};



/*
// NOT WORKING - Fails for "Mississipi", "issip" 
var strStr = function(haystack, needle) {
	var i, 
		needleArray = [],
		needleLen = 0,
		haystackArray = [],
		haystackLen = 0,
		startIndexOfNeedle = 0,
		needleIndex = 0,
		startedNeedle = false;

	// use stack of needle to compare against haystack.
	needleArray = needle.split("");
	needleLen = needleArray.length;
	
	// haystack to traverse.
	haystackArray = haystack.split("");
	haystackLen = haystackArray.length;
	
	// Corner case
	if ( (needleLen === 0))  {
		return 0;
	} else if ( (haystackLen < needleLen) || ((haystackLen === 0) && (needleLen !== 0)) ) {
		return -1;
	} else if (needleLen === haystackLen) {
		// if needle is same length as haystack, check if they're the same
		if (needle === haystack) {
			return 0;
		} else {
			return -1;
		}
	}
	
	// Traverse haystack
	for (i=0; i < haystackLen; i++) {
				
		// if matches first value of needle, increment needle index
		if ((haystackArray[i] === needleArray[0]) && !startedNeedle ) {
			startIndexOfNeedle = i;
			startedNeedle = true;
			
			// if reached end of needle, needle has been found, can return start index
			if (needleIndex === needleLen - 1) {
				return startIndexOfNeedle;
			} else {
				needleIndex++;		
			}

		// else if haystack is still matching needle	
		} else if (haystackArray[i] === needleArray[needleIndex]) {
			// if reached end of needle, needle has been found, can return start index
			if (needleIndex === needleLen - 1) {
				return startIndexOfNeedle;
			} else {
				needleIndex++;		
			}
		// haystack not matching, reset needle index	
		} else {
			startIndexOfNeedle = -1;
			startedNeedle = false;
			needleIndex = 0;
		}
	}
	// Needle not found
	return -1;

};
*/