//##############################################################################################
// CODILITY PROBLEMS www.codility.com/programmers
//##############################################################################################

//==============================================================================================
// Lesson 7 - Stacks and Queues
//==============================================================================================

//----------------------------------------------------------------------------------------------
// L7 - Brackets & Nesting
//----------------------------------------------------------------------------------------------

/*
A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

function solution(S);
that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

Assume that:

N is an integer within the range [0..200,000];
string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N) (not counting the storage required for input arguments).
*/

// Brackets - 
function brackets(S) {
	var i, bracketStack = [], leftBracketStack = [], leftBracket, currentBracket;
	
	// break string up into an array of characters
	bracketStack = S.split('');

	// push all left brackets into stack, then pop if next item is matching right bracket, else brackets are uneven and return 0
	for (i=0; i < bracketStack.length; i++) {
		currentBracket = bracketStack[i];
		// if left bracket, then push into stack
		if ( (currentBracket === "(") || (currentBracket === "[") || (currentBracket === "{") ) {
			leftBracketStack.push(currentBracket);		
		} else {		// its a right bracket
			leftBracket = leftBracketStack.pop();
			// check that right bracket matches top of stack if not, fail	
			if (!(((currentBracket === ")") && (leftBracket === "(")) || 
				((currentBracket === "]") && (leftBracket === "[")) ||
				((currentBracket === "}") && (leftBracket === "{")))) {
								
				return 0;
			}
				
		} 
		
	}
	// if the stack is empty after all values have been checked, then all brackets are matching (or empty array)
	if (leftBracketStack.length === 0){
		return 1;
	} else {
		return 0;
	}	
}