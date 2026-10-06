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

