
/**
 * Steps to solve Fixed-Size Sliding Window
 *
 * @param arr - An array of numbers
 * @param k - The fixed window size
 * @returns The maximum sum of a window
 *
 * 1. Check whether k is valid for the array.
 *
 * 2. Create a variable to store the sum of the first k elements.
 *
 * 3. Set the initial window sum as the maximum sum.
 *
 * 4. Loop through the remaining elements, starting at index k.
 *
 * 5. For each new element:
 *    - Add the new element entering the window.
 *    - Subtract the element leaving the window.
 *
 * 6. Update the maximum sum if the current window sum is greater.
 *
 * 7. Continue until the end of the array.
 *
 * 8. Return the maximum sum.
 */




//**fix window */
function maxSum(arr: number[], k : number): number | null {
    let left = 0;
    let right = k -1;

    let windowSum = 0;

    for (let i = 0; i < k ; i++){
        windowSum += arr[i]
    }

    let maxSum = windowSum;

    for (let i = k; i < arr.length; i++){
        windowSum = windowSum - arr[left] + arr[i]
        left++;

        if ( windowSum > maxSum){
            maxSum = windowSum
        }
    }

    return maxSum;
}

export default function maxSumArraySum(arr: number[], k : number): number | null {
    if (arr.length < k) return null; // Added safety check

    let windowSum = 0;
    
    // ③ calculate first k elements
    for (let i = 0; i < k ; i++){
        windowSum += arr[i];
    }

    let maxSum = windowSum;
    let left = 0; // Move left pointer declaration here to track the start of the window

    // ⑤ for loop → move window
    for (let i = k; i < arr.length; i++){
        // ⑧ update windowSum (subtract leaving value, add entering value)
        windowSum = windowSum - arr[left] + arr[i];
        
        // Move the left pointer forward for the next iteration!
        left++; 

        // ⑨ update max
        if (windowSum > maxSum){
            maxSum = windowSum;
        }
    }

    return maxSum;
}