//##############################################################################################
// CODILITY PROBLEMS www.codility.com/programmers
//##############################################################################################

//==============================================================================================
// Lesson 7 - Stacks and Queues
//==============================================================================================

//----------------------------------------------------------------------------------------------
// L7 - Stone Wall
//----------------------------------------------------------------------------------------------

/*
Solution to this task can be found at our blog.

You are going to build a stone wall. The wall should be straight and N meters long, and its thickness should be constant; however, it should have different heights in different places. The height of the wall is specified by a zero-indexed array H of N positive integers. H[I] is the height of the wall from I to I+1 meters to the right of its left end. In particular, H[0] is the height of the wall's left end and H[N−1] is the height of the wall's right end.

The wall should be built of cuboid stone blocks (that is, all sides of such blocks are rectangular). Your task is to compute the minimum number of blocks needed to build the wall.

Write a function:

function solution(H);
that, given a zero-indexed array H of N positive integers specifying the height of the wall, returns the minimum number of blocks needed to build it.

For example, given array H containing N = 9 integers:

  H[0] = 8    H[1] = 8    H[2] = 5
  H[3] = 7    H[4] = 9    H[5] = 8
  H[6] = 7    H[7] = 4    H[8] = 8
the function should return 7. 


Assume that:

N is an integer within the range [1..100,000];
each element of array H is an integer within the range [1..1,000,000,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
*/

// Stone Wall - 
function stoneWall(H) {
	var i, numWalls = 0, lastWallHeight = [], lastWallHeightCount = 0, len = H.length, stackDone = true;
	
	// Solve by tracking if height is increasing or decreasing. If height is increasing, assume you're creating an new wall
	// by pushing its storing its height into the stack. If the height is decreasing, check the new height against the last height of the wall
	// and if it is lower, pop the last wall and repeat until the new height is above the last wall height OR if the last wall height stack is empty
	// if it is empty, assume a new wall is created and push the new height onto the stack. If the new height is equal to the last wall height, 
	// you are on the last wall height's block and no new wall is created nor last wall height popped.
	
	
	// corner cases
	if (len === 0) {
		return 0;
	} 
	
	// If initial height is not zero, start with 1 wall
	if (H[0] !== 0) {
		lastWallHeight.push(H[0]);
		lastWallHeightCount++;		
		numWalls++;
	}
	
	for (i=1; i < len; i++) {// go from left to right
		// if height is increasing, add a wall and keep track of its height
		if (H[i] > lastWallHeight[lastWallHeightCount-1]) {
			lastWallHeight.push(H[i]);
			lastWallHeightCount++;
			numWalls++;

		} else if (H[i] < lastWallHeight[lastWallHeightCount-1]) {
		// if height is decreasing 
		   // Invariant: stack holds all boxes underneath you
			stackDone = false;
			while (!stackDone) {	// pop/push the stack from top downwards
				
				// if height is decreasing and there is no lastWallHeight, make current height lastWallHeight which is start of a new wall
				if (lastWallHeightCount === 0) {// is stack empty?
					lastWallHeight.push(H[i]);
					lastWallHeightCount++;
					numWalls++;				
					stackDone = true;
				// if height is decreasing and the destination height is lower than lastWallHeight 					
				} else if ( H[i] < (lastWallHeight[lastWallHeightCount - 1]) ) {
					lastWallHeight.pop();
					lastWallHeightCount--;								
				// if height is decreasing and the destination height is equal to lastWallHeight 										
				} else if (H[i] === (lastWallHeight[lastWallHeightCount - 1])) {	
					stackDone = true;	
				// if height is increasing, add a wall and keep track of its last height, 				
				} else if (H[i] > (lastWallHeight[lastWallHeightCount - 1])) {
					lastWallHeight.push(H[i]);
					lastWallHeightCount++;
					numWalls++;
					stackDone = true;
				}
			}
		}			
	}
	return numWalls;
}