//[5, 3, 4, 1, 2]


//steps to solve insertion sort algorithm
// 1. Loop through the array from the first element to the last element
// 2. Store the current value in a variable
// 3. Compare the current value with the previous elements in the array
// 4. If the current value is less than the previous element, shift the previous element to the right
// 5. Repeat step 4 until you find the correct position for the current value
// 6. Insert the current value at its correct position

//Take current value → move left → shift bigger values → insert

// Insertion Sort:
// Take the current element and insert it
// into the correct position in the sorted part.

export default function insertionSort(array: number[]): number[] {

    // Outer loop:
    // Start from index 1 because the first element
    // is considered sorted by itself.
    for (let i = 1; i < array.length; i++) {

        // Store the current value because
        // we may move other elements around.
        const currentValue = array[i];

        // Start checking from the element immediately
        // to the left of the current value.
        let j = i - 1;

        // Continue moving left while:
        // 1. We are still inside the array.
        // 2. The current element is greater than
        //    the value we want to insert.
        while (j >= 0 && array[j] > currentValue) {

            // Move the larger element one position
            // to the right.
            array[j + 1] = array[j];

            // Move one position to the left
            // and continue checking.
            j--;
        }

        // Insert the current value into the empty
        // position we created.
        array[j + 1] = currentValue;
    }

    // Return the sorted array.
    return array;
}