// FUNCTION buildPrefixSum(nums):

//     CREATE an empty prefix array

//     ADD the first number of nums to prefix

//     FOR each index i, starting from 1:
//         prefix[i] = prefix[i - 1] + nums[i]

//     RETURN prefix


export default function buildPrefix(arr: number[]): number[]{
    let prefix  = [0];


    for (let i =1; i< arr.length; i++){
         prefix[i] = prefix[i -1] + arr[i];
        
    }
    return prefix
}


let array = [2, 4, 1, 5, 3];
console.log(array);
console.log(buildPrefix(array));

let arr: number[] = []
console.log(buildPrefix(arr))