//[5, 3, 4, 1, 2]


//steps to solve insertion sort algorithm
// 1. Loop through the array from the first element to the last element
// 2. Store the current value in a variable
// 3. Compare the current value with the previous elements in the array
// 4. If the current value is less than the previous element, shift the previous element to the right
// 5. Repeat step 4 until you find the correct position for the current value
// 6. Insert the current value at its correct position

//Take current value → move left → shift bigger values → insert

export default function insertionSort(array: number[]): number[] {
    for (let i = 1; i < array.length; i++) {
        let currentValue = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > currentValue) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = currentValue;
    }
    return array;
}