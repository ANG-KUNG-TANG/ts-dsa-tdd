
/**
 * Steps to solve Merge Sort
 *
 * @param arr - An array of numbers
 * @returns The sorted array in ascending order
 *
 * 1. Check the base case:
 *    - If the array has zero or one element,
 *      it is already sorted.
 *
 * 2. Find the middle index of the array.
 *
 * 3. Split the array into a left half and a right half.
 *
 * 4. Recursively sort the left half.
 *
 * 5. Recursively sort the right half.
 *
 * 6. Merge the two sorted halves:
 *    - Compare the first unprocessed element
 *      from each half.
 *    - Add the smaller element to the result.
 *    - Advance the pointer for the half you selected.
 *
 * 7. Add any remaining elements from either half.
 *
 * 8. Return the merged sorted array.
 */



export default function mergeSort(array: number[]): number[] {
    // Base case: if the array has 0 or 1 elements, it is already sorted.
    if (array.length <= 1) {
        return array;
    }

    //split th earra into left and fight
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    //recusivetly sor the array left and right
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    //merget the sorted left and right arrays
    return merge(sortedLeft, sortedRight);
}

//helper funiction to mearg two sorted arrays into one sorted array

function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;

    //compare the elements of the left and right arrays
    while(( i < left.length) && (j < right.length)) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    //add any remaining elements from the left array
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    
    //add any remaining elements from the right array
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

let array = [38, 27, 43, 3, 9, 82, 10];
console.log("Original array:", array);
const sortedArray = mergeSort(array);
console.log("Sorted array:", sortedArray);