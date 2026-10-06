import { vitest, it, expect, describe } from "vitest";
import insertionSort from '../insertionSort/insertion-sort';


describe('Insertion Sort', () => {
    it('should sor the arry in ascending order', () =>{
        const arr = [5, 3, 4, 1, 2];
        const result = insertionSort(arr);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    })

    it('Should return an empty array if the input array is empty', () => {
        const arr: number[] = [];
        const result = insertionSort(arr);
        expect(result).toEqual([]);
    });

    it('should return the same array if it is already sorted', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = insertionSort(arr);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });
    
    it('should sort an array with negative numbers', () => {
        const arr = [-3, -1, -4, -2, -5];
        const result = insertionSort(arr);
        expect(result).toEqual([-5, -4, -3, -2, -1]);
    });

    it('should sort an array with duplicate numbers', () => {
        const arr = [3, 1, 2, 3, 1];
        const result = insertionSort(arr);
        expect(result).toEqual([1, 1, 2, 3, 3]);
    });

    it('should sort an array with a single element', () => {
        const arr = [1];
        const result = insertionSort(arr);
        expect(result).toEqual([1]);
    });

    it('should sort an array with all elements being the same', () => {
        const arr = [2, 2, 2, 2, 2];
        const result = insertionSort(arr);
        expect(result).toEqual([2, 2, 2, 2, 2]);
    }); 
});

//case 1: should sort the array in ascending order
//[5, 3, 4, 1, 2] expected output: [1, 2, 3, 4, 5]

//case 2: should return an empty array if the input array is empty
//[] expected output: []

//case 3: should return the same array if it is already sorted
//[1, 2, 3, 4, 5] expected output: [1, 2, 3, 4, 5]

//case 4: should sort an array with negative numbers
//[-3, -1, -4, -2, -5] expected output: [-5, -4, -3, -2, -1]

//case 5: should sort an array with duplicate numbers
//[3, 1, 2, 3, 1] expected output: [1, 1, 2, 3, 3]

//case 6: should sort an array with a single element
//[1] expected output: [1]

//case 7: should sort an array with all elements being the same
//[2, 2, 2, 2, 2] expected output: [2, 2, 2, 2, 2]