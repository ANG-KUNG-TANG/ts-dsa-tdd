
/**
 * Steps to solve Two Sum using a Hash Map
 *
 * @param arr - An array of numbers
 * @param target - The target sum
 * @returns The two indexes as number[], or null if no pair exists
 *
 * 1. Create an empty Map to store the numbers we have already visited.
 *    - Key: the number we have seen
 *    - Value: the index of that number
 *
 * 2. Loop through the array from the first index to the last index.
 *
 * 3. Get the current number at index i.
 *
 * 4. Calculate the number we need:
 *    needed = target - current
 *
 * 5. Check whether the needed number already exists in the Map.
 *
 * 6. If the needed number exists:
 *    - Get its previously stored index from the Map.
 *    - Return [previousIndex, i].
 *
 * 7. If the needed number does not exist:
 *    - Store the current number and its index in the Map.
 *
 * 8. If the loop finishes without finding a pair:
 *    - Return null.
 */




export default function hashMap(arr: number[], target: number): number[] | null {
    let map = new Map<number, number>()

    for (let i= 0; i < arr.length; i++){
        let current = arr[i]

        let needed = target - current

        if ( map.has(needed)){
            let previousIndex = map.get(needed)
            if (previousIndex !== undefined){
                return [previousIndex, i]
            }
        } else {
            map.set(current, i)
        }
    }
   return null

}

// let arr = [11, 2, 15, 7];
// let target = 9;
let arr = [2, 4, 6]
let target = 20
console.log(arr);
console.log(hashMap(arr, target))