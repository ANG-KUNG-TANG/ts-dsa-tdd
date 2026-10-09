
/**
 * Steps to solve First Non-Repeating Number
 *
 * @param arr - An array of numbers
 * @returns The first number appearing once, or null if none exists
 *
 * 1. Create an empty Map to store number → frequency.
 *
 * 2. Loop through the array:
 *    - Get the current number.
 *    - If it exists in the Map, increase its frequency.
 *    - Otherwise, store it with frequency 1.
 *
 * 3. Loop through the original array again:
 *    - Get the current number.
 *    - Check its frequency in the Map.
 *    - If the frequency equals 1, return the number.
 *
 * 4. If no number appears exactly once, return null.
 */

export default function nonRepeating(arr: number[]): number | null{
    let map = new Map<number, number>();

    for (let i =0; i< arr.length; i++){
       let current = arr[i]

       if ( map.has(current)){
        let frequency = map.get(current)
        if (frequency !== undefined){
            frequency += 1
            map.set(current, frequency) 
        }
    } else {
        map.set(current, 1)
    }
    }

    for ( let i=0; i<arr.length; i++){
        let current = arr[i]
        let frequence = map.get(current)
        if ( frequence === 1){
            return current
        }
    }
    return null
}

let arr = [4, 2, 4, 9];
let arr1 = [2,2,3,3];
let arr2 = [6]
let arr3: number[] = []
console.log(arr)
console.log(nonRepeating(arr))
console.log(nonRepeating(arr1))
console.log(nonRepeating(arr2))
console.log(nonRepeating(arr3))