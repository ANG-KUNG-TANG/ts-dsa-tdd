
/**
 * Steps to solve Frequency Counter using a Map
 *
 * @param arr - An array of numbers
 * @returns A Map containing each number and its frequency
 *
 * 1. Create an empty Map to store numbers and their counts.
 *
 * 2. Loop through the array from the first element to the last.
 *
 * 3. Get the current number.
 *
 * 4. Check whether the current number already exists in the Map.
 *
 * 5. If it exists:
 *    - Get its current count.
 *    - Increase the count by 1.
 *    - Update the Map with the new count.
 *
 * 6. If it does not exist:
 *    - Add the number to the Map with a count of 1.
 *
 * 7. After the loop finishes:
 *    - Return the Map.
 */

export default function frequencyCount(arr: number[]): Map<number, number>{
    let map = new Map<number, number>();

    for (let i=0; i< arr.length; i++){
        let current = arr[i]

        if ( map.has(current)){
            let frequency = map.get(current)
            if ( frequency !== undefined){
                frequency += 1
                map.set(current, frequency)
            }
            
        } else {
            map.set(current, 1)
        }
    }
    return map
}