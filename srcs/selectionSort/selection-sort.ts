
/**
 * Steps to solve Selection Sort
 *
 * @param arr - An array of numbers
 * @returns The sorted array in ascending order
 *
 * 1. Loop through the array to choose the next position to fill.
 *
 * 2. Assume the current position contains the minimum value.
 *
 * 3. Loop through the remaining unsorted portion.
 *
 * 4. If a smaller element is found:
 *    - Update the minimum index.
 *
 * 5. After checking the unsorted portion:
 *    - Swap the minimum element with the element
 *      at the current position.
 *
 * 6. Move to the next position.
 *
 * 7. Repeat until the array is sorted.
 *
 * 8. Return the sorted array.
 */


// Selection Sort:
// Find the smallest element in the unsorted part
// and swap it with the first element of that part.

export default function selectionSort(array: number[]): number[] {

    // Outer loop:
    // Controls the position where the next smallest
    // element should be placed.
    // We stop at length - 1 because the last element
    // will automatically be in the correct position.
    for (let i = 0; i < array.length - 1; i++) {

        // Assume the current position contains
        // the smallest element.
        let minIndex = i;

        // Inner loop:
        // Search the remaining unsorted part of the array.
        // Start from the element after i.
        for (let j = i + 1; j < array.length; j++) {

            // Compare the current element with
            // the smallest element we have found so far.
            if (array[j] < array[minIndex]) {

                // If we find a smaller element,
                // remember its index.
                minIndex = j;
            }
        }

        // Swap the smallest element we found
        // with the element at position i.
        [array[i], array[minIndex]] =
            [array[minIndex], array[i]];
    }

    // Return the sorted array.
    return array;
}