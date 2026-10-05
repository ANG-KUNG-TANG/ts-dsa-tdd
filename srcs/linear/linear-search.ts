// //array  = [4, 8, 2, 9, 5]
// target = 9


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