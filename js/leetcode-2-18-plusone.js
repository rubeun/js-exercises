
//##############################################################################################
// Leetcode Exercises  https://leetcode.com/problems/
//##############################################################################################

//==============================================================================================
// Chapter 2
//==============================================================================================


//----------------------------------------------------------------------------------------------
// 2 - 18 Plus One
//----------------------------------------------------------------------------------------------

/*
Given a non-negative number represented as an array of digits, plus one to the number.

The digits are stored such that the most significant digit is at the head of the list.
*/


var plusOne = function(digits) {
	var i, len = digits.length, carryOne = true, oneDigit = [1];
   
   // traverse digits from last to first
   for (i = len-1; i >= 0; i--) {
   	
   	// Check if already at first digit & if a 9, then set to 0 and push a digit 1 to front of array 
   	if ((i === 0) && (digits[0] === 9) && carryOne) {
   		digits[i] = 0;
   		digits.unshift(1);
   	} else if ((digits[i] === 9) && carryOne) {
   		digits[i] = 0;
   		carryOne = true;
   	} else if (digits[i] < 9) {
			if (carryOne) {
	   		digits[i] += 1;
	   		carryOne = false;
	   	} else {
	   		break;	   	
	   	}				
   	}
   
   }   
   return digits;    
};