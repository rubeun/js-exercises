
//##############################################################################################
// Leetcode Exercises  https://leetcode.com/problems/
//##############################################################################################

//==============================================================================================
// Chapter 1
//==============================================================================================


//----------------------------------------------------------------------------------------------
// 1 - 8  String to Integer (atoi)
//----------------------------------------------------------------------------------------------

/*
Implement atoi to convert a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned. If the correct value is out of the range of representable values, INT_MAX (2147483647) or INT_MIN (-2147483648) is returned.
*/


var myAtoi = function(str) {
	var i, 
		intLen, 
		stringLen, 
		validInteger, 
		stringArray = [], 	// Array of characters in original string
		validIntegers = [], 	// Array of valid digits
		isNegative = false, 
		sequenceStarted = false, 
		signFound = false, 
		multiplier = 1, 
		returnValue = 0, 
		unicodeForZero = 48, 
		overFlowArray = [2, 1, 4, 7, 4, 8, 3, 6, 4, 7], 
		underFlowArray = [2, 1, 4, 7, 4, 8, 3, 6, 4, 8], 
		maxLen = 10;
  
  	stringArray = str.split("");
  
  	stringLen = stringArray.length;
  	  
  	  
	// Step 1 - Trim off all whitespaces. Break out of loop when first non-whitespace found without resetting i.
	for (i=0; i < stringLen; i++) {
		// Traverse through all whitespaces until non-whitespace found.
		if(stringArray[i] !== " ") {							
			break;
		}
	
	}  	  
  	  
  	// Step 2 - Continue looping through remainder of non-whitespace (i continued from previous loop). Check if sign or digit.   
	for (; i < stringLen; i++) {
  		// If first sign found, set signFound to true and if it's negative also set isNegative to true.
  		if (stringArray[i].match(/[\-\+]/) && !signFound) {
  			if (stringArray[i] === "-") {
  				isNegative = true;
  			}	
  			signFound = true;
  		// Else if digit found, push into valid integer array, valid number sequence started so set sequenceStarted to true.	
  		} else if (stringArray[i].match(/[0-9]/)) {  		
  			validIntegers.push(stringArray[i]);
			sequenceStarted = true;
  		// Else if non digits after valid number sequence, ignore and exit loop
  		} else if (sequenceStarted){ 
  			break;
  		// Anything else is invalid, return 0	
  		} 	else {
  			return 0;
  		}	
  		
  	}
  	
  	// Check length of array of valid integers. 
	intLen = validIntegers.length;
	
	// Check for overflow or underflow. 
	if (intLen > maxLen) {
		if (isNegative) {
			return -2147483648;		
		} else {
			return 2147483647;
		}		
	}
	
	// If digit length is exactly 10 (length of overflow/underflow limit), check if overflow or underflow
	if (intLen === maxLen) {
		
		// Check for negative underflow
		if (isNegative) {		
			for (i=0; i < intLen; i++) {
				// Check against UnderFlow array to see if any number is larger than underflow number, if found, return max underflow value
				if (validIntegers[i] > underFlowArray[i]) {
					return -2147483648;
				} else if (validIntegers[i] < underFlowArray[i]){
					break;
				}	
			}
		// Check for positive overflow
		} else {
			for (i=0; i < intLen; i++) {
				// Check against OverFlow array to see if any number is larger than overflow number, if found, return max overflow value
				if (validIntegers[i] > overFlowArray[i]) {
					return 2147483647;
				} else if (validIntegers[i] < overFlowArray[i]){
					break;
				}
			}
		}
	}
  	
  	// Convert array of string digits to integers by using its unicode value.
  	for (i=intLen-1; 0 <= i ; i--) {
  		
  		// Subtract value's unicode with unicode for zero to determine its integer value.
  		validInteger = validIntegers[i].charCodeAt(0) - unicodeForZero; 
  		// Multiply with multiplier to get correct place-value.
		returnValue = returnValue + validInteger * multiplier;
  		multiplier = multiplier * 10;
  		
  	}
  	
  	// Return integers
  	if (isNegative){
  		return (-returnValue);
  	} else {
		return returnValue;    
  	}	
};