
/**
 * Steps to solve Two Pointers (Opposite Direction)
 *
 * @param arr - A sorted array of numbers
 * @param target - The target sum
 * @returns The two indexes, or null if no pair exists
 *
 * 1. Create a left pointer at the first index.
 *
 * 2. Create a right pointer at the last index.
 *
 * 3. While the left pointer is smaller than the right pointer:
 *
 *    a. Calculate the sum of arr[left] and arr[right].
 *
 *    b. If the sum equals the target:
 *       - Return [left, right].
 *
 *    c. If the sum is smaller than the target:
 *       - Move the left pointer one position right.
 *
 *    d. If the sum is greater than the target:
 *       - Move the right pointer one position left.
 *
 * 4. If the pointers meet or cross without finding a pair:
 *    - Return null.
 */



const nums = [1, 2, 4, 6, 8, 9, 14];
const target = 13;

export default function pointer(nums: number[], target: number): boolean | [number, number] | null {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === target) {
            return true;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return false ;
}

console.log(nums, target);
console.log(pointer(nums, target));

