// //array  = [1, 3, 5, 7, 9, 11, 13]
// target = 9

// explinaiotn and steps to sove binay searcch algorithm
// initlt the array must be sorted in ascending order
// 1. Find the middle index of the array
// 2. Compare the middle element with the target value
// 3. If the middle element is equal to the target, return the index
// 4. If the middle element is less than the target, search in the right half of the array
// 5. If the middle element is greater than the target, search in the left half of the array
// 6. Repeat steps 1-5 until the target is found or the search space is empty

//!!left, mid, right

export default function binaySearch(array: number[], target: number): number {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {

        const mid = Math.floor((left + right) / 2);
        if (target === array[mid]) {
            return mid;
        } else if (target > array[mid]) {
            left = mid + 1;
        } else {
            right = mid -1;
        }
    }
    return -1;
}