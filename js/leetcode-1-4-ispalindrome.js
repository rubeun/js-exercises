
//##############################################################################################
// Leetcode Exercises  https://leetcode.com/problems/
//##############################################################################################

//==============================================================================================
// Chapter 1
//==============================================================================================

//----------------------------------------------------------------------------------------------
// 1 - 4 Valid Palindrome
//----------------------------------------------------------------------------------------------


 
// SIMPLE - Using .reverse function
var isPalindrome1 = function(s) {
	var original = "", reverse = "";
	
	// Use REGEX to strip non alphabets from string and make all lower case
	original = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
	
	// Flip original around by splitting into individual characters, using JS .reverse and re-joining.
	reverse = original.split("").reverse().join("");

	// Compare original with reverse, palindrome if identical
	if (original === reverse) {
		return true;
	} else {
		return false;
	}
	
};

// Same method but reversing manually
var isPalindrome2 = function(s) {
	var arrayLen, original = "", stringArray = [], palinStack = [], compare = "", pivot = 0;
	
	// Use REGEX to strip non alphabets from string and make all lower case 
	original = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
	
	// Split original into an array of characters. Note its length.
	stringArray = original.split("");	
	arrayLen = stringArray.length;
	
	// If length is EVEN, no middle number (pivot), so push first half into stack, then compare with 2nd half and pop stack if equal,
	// if stack is empty at end, 2nd half is equal to first half and hence a Palindrome.
	if (arrayLen % 2 === 0) {
		
		pivot = arrayLen / 2;
	
		for (i=0; i < arrayLen; i++) {
					
			if (i < pivot) {
			
				palinStack.push(stringArray[i]);	
					
			} else {
			
				compare = palinStack.pop();
				
				if(compare !== stringArray[i]) {
					return false;
				}
			
			}

		}		
		return true;
	
	} else {
	// If length is ODD, push first half, skip middle pivot, then compare with 2nd half while popping
		pivot = Math.floor(arrayLen / 2);
			
		for (i=0; i < arrayLen; i++) {
					
			if (i < pivot) {
				palinStack.push(stringArray[i]);		
			} else {
				
				// ignore pivot
				if (i !== pivot) {
					
					compare = palinStack.pop();
					
					if(compare !== stringArray[i]) {
						return false;
					}
				}
			}

		}		
		return true;
	
	}		
	
};


/*  
// NOT WORKING - Solution does not work with unbalanced strings with non-alphanumeric values
var isPalindrome = function(s) {
	var arrayLen, original = "", stringArray = [], palinStack = [], compare = "", pivot = 0;
		
	stringArray = original.split("");
	
	arrayLen = stringArray.length;
	
	// If even push first half into stack, then compare with 2nd half while popping
	if (arrayLen % 2 === 0) {

		pivot = arrayLen / 2;
	
		for (i=0; i < arrayLen; i++) {
					
			if (i < pivot) {
				if(stringArray[i].match(/[0-9a-zA-Z]/)) {
					palinStack.push(stringArray[i].toLowerCase());															
				}		
					
			} else {
			
				compare = palinStack.pop();

				if(compare.match(/[0-9a-zA-Z]/)) {
				
					if(compare !== stringArray[i].toLowerCase()) {
						return false;
					}
				}
					
			}

		}		
		return true;
	
	} else {
	// If odd, push first half, skip middle pivot, then compare with 2nd half while popping
		pivot = Math.floor(arrayLen / 2);
			
		for (i=0; i < arrayLen; i++) {
					
			if (i < pivot) {
				if(stringArray[i].match(/[0-9a-zA-Z]/)) {
					palinStack.push(stringArray[i].toLowerCase());															
				}		
			} else {
				
				// ignore pivot
				if (i !== pivot) {
					
					compare = palinStack.pop();
					
					if(compare.match(/[0-9a-zA-Z]/)) {
					
						if(compare !== stringArray[i].toLowerCase()) {
							return false;
						}
					}
				}
			}

		}		
		return true;
	
	}		
	
};
*/