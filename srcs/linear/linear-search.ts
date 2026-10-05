// //array  = [4, 8, 2, 9, 5]
// target = 9

//stept to solve linear search algorithm
// 1. Loop through the array from the first element to the last element
// 2. Compare each element with the target value
// 3. If the current element is equal to the target, return the index of that element
// 4. If the loop completes and the target is not found, return -1


export default function linearSearch(array: number[], target: number): number {
    for ( let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

const array = [4, 8, 2, 9, 5];
const target = 9;
const result = linearSearch(array, target);
console.log(result); // Output: 3