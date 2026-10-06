

export default function findPair(nums: number[], target: number): [number, number] | null {
    let left = 0;
    let right = nums.length - 1;

    while ( nums[left] < target ){
         
        const sum = nums[left] + nums[right];

        if ( sum === target) {
            return [nums[left], nums[right]]
        } else if ( sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return null;
}

// const nums = [1, 2, 4, 6, 8, 9, 14];
// const target = 13;
// console.log({"origin": nums, "target": target} );
// console.log(findPair(nums, target));