// ① function
//    ↓
// ② windowSum = 0
//    ↓
// ③ calculate first k elements
//    ↓
// ④ max = windowSum
//    ↓
// ⑤ for loop → move window
//    ↓
// ⑥ identify leaving value
//    ↓
// ⑦ identify entering value
//    ↓
// ⑧ update windowSum
//    ↓
// ⑨ update max
//    ↓
// ⑩ return max


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

export default function maxSubArraySum(arr: number[],k: number): number | null{
    if (arr.length < k){return null}

    let windowSum = 0;

    for (let i = 0; i < k;i++){
        windowSum += arr[i]
    }
    
    let maxSum = windowSum;

    for (let i=k; i < arr.length; i++){
        windowSum = windowSum - arr[k - i] + arr[i]

        maxSum = Math.max(windowSum, maxSum);
    }
    return maxSum
}