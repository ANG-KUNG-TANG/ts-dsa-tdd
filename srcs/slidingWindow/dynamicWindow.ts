

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


