

export default function quickSort(array: number[]): number[] {
    // Base case: if the array has 0 or 1 elements, it is already sorted.
    if (array.length <= 1) {
        return array;
    }

    //choose a pivot element (we'll use the mid element in this case)
    const pivot = Math.floor(array.length / 2);
    const pivotValue = array[pivot];

    //partition the array into three parts: less than, equal to, and greater than the pivot
    let left: number[] = [];
    let right: number[] = [];
    let equal: number[] = [];

    for (let i = 0; i < array.length; i++) {
        if ( array[i] < pivotValue) {
            left.push(array[i]);
        } else if (array[i] > pivotValue) {
            right.push(array[i]);
        } else {
            equal.push(array[i]);
        }
    }

    // recursively sort the left and right arrays
    left = quickSort(left);
    right = quickSort(right);

    // combine the sorted arrays
    return [...left, ...equal, ...right];
}