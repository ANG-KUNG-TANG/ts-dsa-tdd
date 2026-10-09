
/**
 * Steps to solve Variable-Size Sliding Window
 *
 * @param arr - An array of positive numbers
 * @param target - The minimum required sum
 * @returns The minimum subarray length, or 0 if no valid subarray exists
 *
 * 1. Create a left pointer at index 0.
 *
 * 2. Create a variable to store the current window sum.
 *
 * 3. Create a variable to store the minimum window length.
 *    - Initialize it to Infinity.
 *
 * 4. Loop through the array using the right pointer.
 *
 * 5. Add the current right element to the window sum.
 *
 * 6. While the window sum is greater than or equal to target:
 *    - Update the minimum window length.
 *    - Subtract the element at the left pointer from the sum.
 *    - Move the left pointer one position to the right.
 *
 * 7. Continue expanding the window with the right pointer.
 *
 * 8. After the loop:
 *    - If no valid window was found, return 0.
 *    - Otherwise, return the minimum window length.
 */



function maxSummary(arr: number[], target: number): number | null {

    let left = 0;
    let windowSum = 0;
    let Minlength = Infinity;

    for ( let i =0; i < arr.length; i++){
        windowSum += arr[i]

        while ( windowSum >= target){
            let currentLength =  i - left + 1;

            if (currentLength < Minlength){
                Minlength = currentLength
            }

            windowSum -= arr[left]

            left++
        }
        if ( Minlength === Infinity){
            return 0
        }
    }
    

    return Minlength
}

export default function minSubArrayLen(target: number, nums: number[]): number {
  let minLength = Infinity; // The Record Book
  let windowSum = 0;        // The Backpack
  let start = 0;            // The Optimizer

  // The Explorer (end pointer) expands the window to the right
  for (let end = 0; end < nums.length; end++) {
    windowSum += nums[end];

    // When the condition is met, try to shrink the window from the left
    while (windowSum >= target) {
      // 1. Update the record book with the current valid window size
      minLength = Math.min(minLength, end - start + 1);
      
      // 2. Shrink the window: subtract the left element and move 'start' forward
      windowSum -= nums[start];
      start++;
    }
  }

  // If minLength never changed, no valid subarray was found
  return minLength === Infinity ? 0 : minLength;
}


