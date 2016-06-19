
//##############################################################################################
// Leetcode Exercises  https://leetcode.com/problems/
//##############################################################################################

//==============================================================================================
// Chapter 1
//==============================================================================================

//----------------------------------------------------------------------------------------------
// 1 - 1  TwoSum
//----------------------------------------------------------------------------------------------

// Use Hash Table whereby the Hash Key is the future integer needed to sum to the Target value 
// and the Hash Value is the stored index of that integer. 
// e.g. ([3,2,4],6) while checking hash table if current value is a Hash Key (i.e. future integer)
// save all future needed integers: 6-3=3 => {3:0}, 6-2=4 => {3:0, 4:1}, current value 4 is a Hash Key
// Hash Value is the index of the first number and the current index is the index of the second number.
var twoSum = function(nums, target){
	var saved={};
	var result=[];

	// Traverse down array and check if it already exists as a Hash Key in saved. 
	for(i=0; i< nums.length; i++){
		// If Hash Key found, return Hash Value as 1st index and current index as 2nd index 
		if(saved.hasOwnProperty(nums[i])){
			result[0] = saved[nums[i]];
			result[1] = i;
			return result;
		}
		// Store into Hash Table. Hash Key is value of 2nd integer needed and Hash Value is the index of 1st integer
		saved[target - nums[i]] = i;
	}
};

