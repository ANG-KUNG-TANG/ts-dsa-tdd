
/**
 * Steps to solve Contains Duplicate using a Set
 *
 * @param arr - An array of numbers
 * @returns true if a duplicate exists, otherwise false
 *
 * 1. Create an empty Set to store numbers we have visited.
 *
 * 2. Loop through the array from the first element to the last.
 *
 * 3. Get the current number at index i.
 *
 * 4. Check whether the current number already exists in the Set.
 *
 * 5. If it exists:
 *    - Return true because we found a duplicate.
 *
 * 6. If it does not exist:
 *    - Add the current number to the Set.
 *
 * 7. If the loop finishes without finding a duplicate:
 *    - Return false.
 */



export default function containDuplicate(arr: number[]): Boolean {
    let seen = new Set<number>()

    for ( let i =0; i< arr.length; i++){
        let current = arr[i];

        if ( seen.has(current)){
            return true
        } else {
            seen.add(current)
        }
    }

    return false
}

let arr = [1, 2, 3, 1]
// Output: true
console.log(`test : `, arr)
let arr1 = [1, 2, 3, 4]
// Output: false
console.log(containDuplicate(arr));
console.log(containDuplicate(arr1))