// Bubble Sort:
// Compare two neighboring elements and swap them
// if they are in the wrong order.

export default function bubbleSort(array: number[]): number[] {

    // Outer loop:
    // Controls how many passes we make through the array.
    // After each pass, the largest unsorted value
    // moves to its correct position at the end.
    for (let i = 0; i < array.length; i++) {

        // Inner loop:
        // Start at index 0 and compare neighboring elements.
        // We subtract i because the last i elements are already sorted.
        // We subtract 1 because we compare j with j + 1.
        for (let j = 0; j < array.length - i - 1; j++) {

            // Compare two neighboring elements:
            // array[j] = current/left element
            // array[j + 1] = next/right element
            if (array[j] > array[j + 1]) {

                // If the left element is greater than the right element,
                // they are in the wrong order, so swap them.
                [array[j], array[j + 1]] =
                    [array[j + 1], array[j]];
            }
        }
    }

    // Return the sorted array.
    return array;
}