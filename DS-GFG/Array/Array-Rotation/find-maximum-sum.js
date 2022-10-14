// Given an array arr[] of n integers, find the maximum that maximizes the sum of the value of i*arr[i] where i varies from 0 to n-1.

/*Input: arr[] = {8, 3, 1, 2}
Output: 29
Explanation: Lets look at all the rotations,
{8, 3, 1, 2} = 8*0 + 3*1 + 1*2 + 2*3 = 11
{3, 1, 2, 8} = 3*0 + 1*1 + 2*2 + 8*3 = 29
{1, 2, 8, 3} = 1*0 + 2*1 + 8*2 + 3*3 = 27
{2, 8, 3, 1} = 2*0 + 8*1 + 3*2 + 1*3 = 17

Input: arr[] = {3, 2, 1}
Output: 7
Explanation: Lets look at all the rotations,
{3, 2, 1} = 3*0 + 2*1 + 1*2 = 4
{2, 1, 3} = 2*0 + 1*1 + 3*2 = 7
{1, 3, 2} = 1*0 + 3*1 + 2*2 = 7*/


let arr = [15, 18, 2, 3, 6, 12];
let n = arr.length;
function countRotations(arr, n)
	{
		// We basically find index of minimum
		// element
		let min = arr[0]
        let min_index = 0
		for (let i = 0; i < n; i++)
		{
			if (min > arr[i])
			{
				min = arr[i];
				min_index = i;
			}
		}
		return min_index;
	}

// Driver Code
	

	
	console.log(countRotations(arr, n));