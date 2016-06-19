
//##############################################################################################
// Leetcode Exercises  https://leetcode.com/problems/
//##############################################################################################


//==============================================================================================
// Chapter 2
//==============================================================================================


//----------------------------------------------------------------------------------------------
// 2 - 17 Reverse Integer
//----------------------------------------------------------------------------------------------

/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!

If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.

Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?

For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/


var reverse = function(x) {
	var i, 
		integerLen, 
		returnValue = 0, 
		multiplier = 1, 
		integerArray = [], 
		digit, 
		remainder, 
		isNegative = false, 
		overflowLimit = 2147483647, 
		underflowLimit = 2147483648;
	
	// Make note if negative
	if (x < 0) {
		isNegative = true;
		remainder = (-x);		
	} else {
		remainder = x;
	}
		
	// Calculate digits by modulus and divisor by 10.  123 % 10 = 3, floor(123 / 10) = 12, etc.	
	while (remainder !== 0) {
		digit = remainder % 10;
		integerArray.push(digit);
		remainder = Math.floor(remainder / 10);
	}
	// reverse array of digits and set length
	integerLen = integerArray.reverse().length;
	
	// Check for Overflow
	if (integerLen > 10) {
		return 0;
	}
	
	// Convert array of digits into one integer		    
	for (i=0; i < integerLen; i++) {
		returnValue = returnValue + integerArray[i] * multiplier;
		multiplier = multiplier * 10;
	}
	
	
	// Return values and check for overflow/underflow
	if (isNegative) {
		if (returnValue > underflowLimit) {
			return 0;
		} else {
			return (-returnValue);	
		}		
	} else {
		if (returnValue > overflowLimit) {
			return 0;
		} else {
			return returnValue;	
		}		
	}   
};