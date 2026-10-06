// const array = [64, 25, 12, 22, 11];
//[11, 12, 22, 25, 64]

// Outer Loop (i) = The TARGET (Where to put the item)

// It points to the empty slot you are trying to fill next.

// It moves slowly, one spot at a time from left to right.

// Inner Loop (j) = The SCANNER (Where to look for the item)

// It starts right after the target (j = i + 1).

// It runs fast all the way to the end of the array, looking for the smallest value to put into slot i.

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