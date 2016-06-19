
//##############################################################################################
// Leetcode Exercises  https://leetcode.com/problems/
//##############################################################################################

//==============================================================================================
// Chapter 1
//==============================================================================================


//----------------------------------------------------------------------------------------------
// 1 - 6 Reverse Words In a String
//----------------------------------------------------------------------------------------------

/*
Given an input string, reverse the string word by word.

For example,
Given s = "the sky is blue",
return "blue is sky the".

What constitutes a word?
A sequence of non-space characters constitutes a word.

Could the input string contain leading or trailing spaces?
Yes. However, your reversed string should not contain leading or trailing spaces.

How about multiple spaces between two words?
Reduce them to a single space in the reversed string.
*/


var reverseWords = function(str) {
	var i, stringArray = [], wordArray = [], newWord, newWordStarted = false;
	
	stringArray = str.split('');
	
	// Traverse Array of all characters looking for non-whitespace
	for (i=0; i < stringArray.length; i++) {
		// Once a first non-whitespace character is discovered, flag it as a new word, reset newWord to empty string,
		// then append the new character to newWord.
		if (stringArray[i].match(/[\S]/) && !newWordStarted) {
			newWordStarted = true;
			newWord = "";
			newWord = newWord + stringArray[i];
		// Else If it is a non-whitespace character but new word has already started, continue appending to newWord	
		} else if (stringArray[i].match(/[\S]/) && newWordStarted) {
			newWord = newWord + stringArray[i];
		// Else If a whitespace is detected and new word had already started, flag newWordStarted to false (end of word found)
		// and push the newWord into the word array.
		} else if (newWordStarted) {
			newWordStarted = false;
			wordArray.push(newWord);
		} 
	
	}
	// At end of the loop, push the last word found into word array. 
	if (newWordStarted) {
		wordArray.push(newWord);
	}	
	// Join all words in array together.
	return wordArray.reverse().join(' ');    
};


// Book Solution - Didn't use .reverse() by starting from back and prepending forwards - Didn't seem to make any difference in performance
var reverseWords2 = function(str) {
	var i, stringArray = [], wordArray = [], newWord, newWordStarted = false;
	
	stringArray = str.split('');
	
	// Traverse Array of all characters looking for non-whitespace
	for (i=stringArray.length-1; i >= 0; i--) {
	
		if (stringArray[i].match(/[\S]/) && !newWordStarted) {
			newWordStarted = true;
			newWord = "";
			newWord = stringArray[i] + newWord;
		} else if (stringArray[i].match(/[\S]/) && newWordStarted) {
			newWord = stringArray[i] + newWord;
		} else if (newWordStarted) {
			newWordStarted = false;
			wordArray.push(newWord);
		} 
	
	}
	if (newWordStarted) {
		wordArray.push(newWord);
	}	
	return wordArray.join(' ');        
};