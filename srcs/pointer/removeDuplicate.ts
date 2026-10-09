// slow = 0
// fast = 1

// while fast < array.length

//     if array[fast] !== array[slow]

//         slow++
//         array[slow] = array[fast]

//     fast++

// return slow + 1


export default function removeDuplicate(arr: number[]): number{

    if (arr.length ===0){
        return 0;
    }

    let slow = 0;
    let fast = 1;

    while (fast < arr.length){
        if ( arr[fast] !== arr[slow]){
            slow++;
            arr[slow] = arr[fast]
        } 
        fast++;
    }
    return slow + 1;
}

let arr = [1,2,1,3,3,4,5,4]
console.log(arr)
console.log(removeDuplicate(arr))



/**
 * Steps to solve Two Pointers (Same Direction)
 *
 * @param arr - A sorted array of numbers
 * @returns The length of the array's unique portion
 *
 * 1. Handle the empty array.
 *    - If the array is empty, return 0.
 *
 * 2. Create a slow pointer to track the position
 *    of the last unique element.
 *
 * 3. Create a fast pointer starting at index 1.
 *
 * 4. Loop while the fast pointer is inside the array.
 *
 * 5. Compare arr[fast] with arr[slow].
 *
 * 6. If they are different:
 *    - Move the slow pointer one position right.
 *    - Copy arr[fast] into arr[slow].
 *
 * 7. Move the fast pointer one position right
 *    on every iteration.
 *
 * 8. Return slow + 1 as the number of unique elements.
 */

